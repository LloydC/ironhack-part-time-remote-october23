const express = require("express");
const hbs = require("hbs")
const app = express();
const port = 3000;
 
app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");
app.use(express.static(`${__dirname}/public`));

app.get("/", (request, response) => {
    let data = {
        name: "Lloyd Chambrier",
        job: "Web Dev Teacher",
        age: 33,
        cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"],
        address: {
            street: "Your heart",
            number: 87
          },
      };
     
      response.render("index", data);
});

app.get("/", (request, response) => {
    
});
 
app.listen(port, ()=> console.log(`Express-demo app is listening on port ${port}`));