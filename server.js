const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
//API routes
const routes = require("./routes");
//models for sequelize
const db = require("./models");

//middleware for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static directory
app.use(express.static("public"));

//Routes
app.use(routes);

//Syncing our sequelize models and then starting our express app
//copied from Chris directly- where did he get this with world emoji?
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT} !`);
  });
});
