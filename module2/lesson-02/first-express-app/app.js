const express = require('express')// loads the express package
const app = express() // create the express server
const port = 3000 // define the express port

app.use(express.static('public')) // tells express where the static files are located
// Homepage Route
app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/views/index.html`)
})

// About page route
app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})