const mongoose = require("mongoose");
const User = require("./models/User.model");

mongoose.connect('mongodb://localhost:27017/mongoose-demo-2')
        // .then(()=> User.create({username: 'lloydchambrier', email: 'lloyd@test.com'}))
        // .then(()=> User.insertMany([{username: 'johndoe', email: 'john@test.com'}, {username: 'janedoe', email: 'jane@test.com'}]))
        // .then(()=> User.find())
        // .then(allUsers => console.log('allUsers', allUsers))
        .then(() => User.findOne({username: 'janedoe'}))
        .then(foundUser => console.log("foundUser", foundUser))
        // .then(() => User.findByIdAndUpdate('6568e1f97b4d2a916003cad1', { email: 'john.doe@gmail.com'}, {new: true}))
        // .then(foundUser => console.log("foundUser2", foundUser))
        .then(() => User.findByIdAndDelete('6568ddec54ac3ed8cf655c50'))
        .then(()=> mongoose.connection.close())
        .catch(err => console.log(err))