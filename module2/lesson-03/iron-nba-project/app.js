const express   = require("express");
const hbs       = require("hbs");
const app       = express();
const path      = require("path");
const port = 3000;
 
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views")); // --> `${__dirname}/views`
app.use(express.static(path.join(__dirname, "public"))); // --> `${__dirname}/public`
 
app.get("/", (req, res) => res.render("index", {title: "IronNBA Homepage", bgPage: "home-bg"}));
 
app.get("/players", (req, res) => res.render("players", {title: "IronNBA Players page",  bgPage: "players-bg"}));
 
app.get("/teams", (req, res) => {
        res.render("teams", {title: "IronNBA Teams page",  bgPage: "teams-bg"})
    // res.render("teams", {layout: false})
});
 
app.listen(port, ()=> console.log(`IronNBA Project running on port ${port}`));