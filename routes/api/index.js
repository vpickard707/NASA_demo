const router = require("express").Router();
const nasaRoutes = require("./nasa");
const dbRoutes = require("./db");

//Separated Routes
router.use("/nasa", nasaRoutes);
router.use("/posts", dbRoutes);

module.exports = router;
