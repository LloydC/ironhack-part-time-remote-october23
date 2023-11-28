const express = require('express')
const port = 3000;
const mongoose = require('mongoose');

const app = express()

app.set("views", "./views")
app.set("view engine", "hbs")

const User = mongoose.model('User', { username: String, age: Number, hobbies: [String]})
const Cat = mongoose.model('Cat', { name: String });

mongoose.connect('mongodb://127.0.0.1:27017/mongoose-demo')
        .catch(err => console.log(err))

app.get("/", (req, res)=>{
    User.find() // find all the users
        .then(allUsers => {
            console.log(allUsers)
            res.render("index", { data: allUsers })
        })
})

app.listen(port, ()=> console.log(`App is running on port ${port}`))
        // Create Document Examples
        // .then(() => {
        //     const kitty = new Cat({ name: 'Hulk' });
        //     kitty.save();
        //     return kitty;
        // })
        // .then(()=>{
        //    return User.create({ username: 'John Doe', age: 43, hobbies: ['Basketball', 'Paininting']})
        // })
        // .then((newCat)=> console.log("New user", newCat))
        // Read Document
        // .then(()=> User.find())
        // .then(allUsers => console.log("allUsers", allUsers))
        //  .then(()=> {
        //     console.log("test")
        //     return Cat.find();
        // })
        // .then(allCats => console.log("allCats", allCats))
      