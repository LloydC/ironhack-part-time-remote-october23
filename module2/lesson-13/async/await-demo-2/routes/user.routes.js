const router = require("express").Router();

const User = require("../models/User.model");
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model")

// ****************************************************************************************
// GET route to display the form to "register" a user
// ****************************************************************************************

router.get("/user-create", (req, res) => res.render("users/create"));

// ****************************************************************************************
// POST route to submit the form to create a user
// ****************************************************************************************

router.post("/user-create", async (req, res) => {
  try {
    const { username } = req.body;
    const userDocFromDB = await User.findOne({ username });

    if (!userDocFromDB) {
      const newUser = await User.create({ username })
      res.redirect(`/profile/${newUser._id}`);
    }
    else {
      res.render("users/create", { message: "It seems you are already registered. ☀️" });
    }
  } catch (error) {
    console.log(error)
  }

  // const { username } = req.body;
  // User.findOne({ username })
  //   .then((userDocFromDB) => {
  //     if (!userDocFromDB) {
  //       // prettier-ignore
  //       User.create({ username })
  //       .then(() => res.redirect('/post-create'));
  //     } else {
  //       res.render("users/create", { message: "It seems you are already registered. ☀️" });
  //       return;
  //     }
  //   })
  //   .catch((err) => console.log(`Error while creating a new user: ${err}`));
});

// ****************************************************************************************
// GET route to display all users from the DB
// ****************************************************************************************

router.get("/users", async (req, res) => {
  try {
    const usersFromDB = await User.find();

   // const data = await Promise.all([User.find(), Post.find(), Comment.find()]) // --> [[user data], [post data], [comment data]]
   // res.render("users/list", { users: data[0], posts: data[1], comments: data[2] }) 
   res.render("users/list", { users: usersFromDB })
  } catch (error) {
    console.log(error)
  }
  // User.find() // <-- .find() method gives us always an ARRAY back
  //   .then((usersFromDB) => res.render("users/list", { users: usersFromDB }))
  //   .catch((err) => console.log(`Error while getting users from the DB: ${err}`));
});

// ****************************************************************************************
// GET details of a specific user (primarily their posts)
// ****************************************************************************************

// ... your code here

module.exports = router;
