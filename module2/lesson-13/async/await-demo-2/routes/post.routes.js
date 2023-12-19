const router = require("express").Router();

const User = require("../models/User.model");
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model")

// ****************************************************************************************
// GET route to display the form to create a new post
// ****************************************************************************************

// localhost:3000/post-create
router.get("/post-create", (req, res) => {
  User.find()
    .then((dbUsers) => {
      res.render("posts/create", { dbUsers });
    })
    .catch((err) => console.log(`Err while displaying post input page: ${err}`));
});

// ****************************************************************************************
// POST route to submit the form to create a post
// ****************************************************************************************

// <form action="/post-create" method="POST">

router.post("/post-create", (req, res) => {
  const { title, content, author } = req.body;

  Post.create({ title, content, author }) //1. Create a new Post 
  .then(dbPost => {
    // when the new post is created, the user needs to be found and its posts updated with the
    // ID of newly created post
    return User.findByIdAndUpdate(author, { $push: { posts: dbPost._id } });
  })//2. Update the User document "posts" field with the new post id
  .then(() => res.redirect('/posts'))//3. Redirect to a different page
  .catch(err => {
    console.log(`Err while creating the post in the DB: ${err}`);
    next(err);
  });
})

// ****************************************************************************************
// GET route to display all the posts
// ****************************************************************************************

router.get('/posts', (req, res)=>{
  Post.find()
      .then(allPosts => {
        res.render('posts/list', {posts: allPosts})
      })
})

// ****************************************************************************************
// GET route for displaying the post details page
// shows how to deep populate (populate the populated field)
// ****************************************************************************************

router.get('/posts/:postId', (req, res)=>{
  const { postId } = req.params;

  Post.findById(postId)
      .populate('author comments')
      .populate({
        path:'comments',
        populate: {
          path: 'author',
        }
      })
      .then((post)=>{
        console.log('post', post)
        res.render('posts/details', post)
      })
})

router.post('/posts/:postId/comment', (req, res, next) => {
  const { postId } = req.params;
  const { author, content } = req.body;
 
  let user;
 
  User.findOne({ username: author })
    .then(userDocFromDB => {
      user = userDocFromDB;
 
      // 1. if commenter is not user yet, let's register him/her as a user
      if (!userDocFromDB) {
        return User.create({ username: author });
      }
    })
    .then(newUser => {
      // prettier-ignore
      Post.findById(postId)
      .then(dbPost => {
        let newComment;
 
        // 2. the conditional is result of having the possibility that we have already existing or new users
        if (newUser) {
          newComment = new Comment({ author: newUser._id, content });
        } else {
          newComment = new Comment({ author: user._id, content });
        }
 
        // 3. when new comment is created, we save it ...
        newComment
        .save()
        .then(dbComment => {
 
          // ... and push its ID in the array of comments that belong to this specific post
          dbPost.comments.push(dbComment._id);
 
          // 4. after adding the ID in the array of comments, we have to save changes in the post
          dbPost
            .save()       // 5. if everything is ok, we redirect to the same page to see the comment
            .then(updatedPost => res.redirect(`/posts/${updatedPost._id}`))
        });
      });
    })
    .catch(err => {
      console.log(`Error while creating the comment: ${err}`);
      next(err);
    });
});

module.exports = router;
