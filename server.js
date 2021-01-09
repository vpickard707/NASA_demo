const express = require("express")
const PORT = precess.env.PORT || 8080;
const app = express ();

const routes = require("./routes");
//models for sequalize
const db = require("./models");

//middleware for express
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//static directory
app.use(express.static("public"));

//Routes
app.use(routes);

//Syncing our sequelize models and then starting our express app
// db/sequelize.synce({force:true}).then(function){
    // app.listen(PORT, () => {
        // console.log(`world emoji == APY Server now on PORT ${PORT}`);
    // })
}