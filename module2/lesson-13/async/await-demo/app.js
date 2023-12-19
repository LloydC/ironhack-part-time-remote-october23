const express = require("express");
const hbs = require("hbs");
const axios = require("axios");
const port = 3000;

const app = express();

app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs")
app.use(express.static(`${__dirname}/public`))

app.get("/", async (req, res) => {  
    try {
        const apiResponse = await axios.get("https://catfact.ninja/fact"); // -- 1
        const secondApiResponse = await axios.get("https://catfact.ninja/fact"); // -- 2

        const catFacts = [ apiResponse.data, secondApiResponse.data]
        console.log('catFacts', catFacts)
        res.render("index", { catFacts })
    } catch (error) {
        console.log(error)
    } 
    // axios.get("https://catfact.ninja/fact") // --> sends a get request to the catNinja api
    //     .then(apiResponse =>{
    //         console.log("apiResponse", apiResponse.data) //print the response from the api
    //         res.render("index", apiResponse.data)
    //     })
    //     .catch(error => console.log(error))
    
})

app.listen(port, ()=> console.log(`Express-api-demo listening on port ${port}`))