const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = 3000;

const User = require('./models/User.model')

app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

app.use(express.static(`${__dirname}/public`))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

mongoose.connect('mongodb://localhost:27017/users-app')
        .then(() => console.log('Connection to DB successful'))
        // .then(()=> User.create({username: 'pedrodiaz', email:'pedro@test.com', password:'Test123'}))
        .catch(err => console.log(err))

app.get("/", (req, res)=>{
    User.find()
        .then((allUsers) => {
            res.render("index", {users: allUsers})
        })
        .catch(err => console.log(err))
})

app.get('/search', (req,res)=>{
    console.log(req.query)
    
    if(req.query.q){
        User.find({username: req.query.q})
        .then(foundUsers => {
            console.log('foundUsers', foundUsers)
            res.render('search', { users: foundUsers })
        })
    }
    else{
        res.render('search')
    }
    
})

app.get('/signup', (req,res) => {
    res.render("signup")
})

app.post('/signup', (req, res)=>{
    console.log(req.body)
    User.create(req.body)
        .then(newUser => {
            console.log('newUser', newUser)
            res.redirect('/')
            // res.redirect(`/profile/${newUser.username}`)
        })
        .catch(err => console.log(err))
})

app.get('/profile/:username', (req, res)=>{
    console.log('req.params', req.params)
    const username = req.params.username;

    User.findOne({ username })
        .then( foundUser => {
            console.log("foundUser", foundUser)
            res.render("profile", {user: foundUser});
        })
})

app.listen(port, ()=> console.log(`Users App is running on port ${port}`))
