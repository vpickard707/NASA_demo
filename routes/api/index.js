const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// -----------------
// const nasaRoutes = require("./nasa");
// const dbRoutes = require("./db");
//
//Separated Routes
// router.use("/nasa", nasaRoutes);
// router.use("/posts", dbRoutes);
// -----------
// API Routes
router.use("/api", apiRoutes);
router.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/main.html"));
});

module.exports = router;
