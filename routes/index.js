// // const { builtinModules } = require("module");
// ----------------------------
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API Routes
router.use("/api", apiRoutes);
//mysql Routes
router.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/main/html"));
});
module.exports = router;
