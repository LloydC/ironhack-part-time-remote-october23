const express = require('express');
const hbs = require('hbs');
const app = express() // start an express server 
const port = 4000;

app.set('view engine', 'hbs') // tells express to use handlebars as a template engine
app.set('views', './views') // tels express where to find template files
// app.use(express.static(`${__dirname}/public`));
app.use(express.static('public'));

// Home route
app.get('/', function (req, res) {
    const cats = [
        {
        name: 'Pebble',
        breed: 'black cat'
        },
        {
            name: 'Oscari',
            breed: 'orange cat'
        },
        {
            name: 'Charlie',
            breed: 'grey cat'
        }
]
    res.render('index', { title: 'Welcome to the homepage :)', catsList: cats})
})

// About route
app.get('/about', function (req, res) {
    res.render('about', { title: ' About Page'})
})

app.listen(port, () => console.log(`App is running on port ${port}`)) // this will tell us where the app is running when we start the project