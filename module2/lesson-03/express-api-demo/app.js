const express = require("express");
const hbs = require("hbs");
const axios = require("axios");
const port = 3000;

const app = express();

app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs")
app.use(express.static(`${__dirname}/public`))

app.get("/", (req, res) => {
    axios.get("https://catfact.ninja/fact") // --> sends a get request to the catNinja api
        .then(apiResponse =>{
            console.log("apiResponse", apiResponse.data) //print the response from the api
            res.render("index", apiResponse.data)
        })
        .catch(error => console.log(error))
    
})

app.listen(port, ()=> console.log(`Exrpess-api-demo listening on port ${port}`))