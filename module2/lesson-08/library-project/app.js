const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;

app.set('views', __dirname + `/views`);
app.set('view engine', 'hbs');

mongoose.connect('mongodb://localhost:27017/library-project')
        .then(() => console.log('Connection to DB successful'))
        .catch(err => console.log(err))

//  Start handling routes here
const index = require('./routes/index');
app.use('/', index);

const bookRoutes = require('./routes/book.routes'); // <== import (require) book routes
app.use('/', bookRoutes); // sets bookRoutes to work with express server

app.listen(port, console.log(`library-project running on port ${port}`))