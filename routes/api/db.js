const router = require("express").Router();
const controller = require("../../controller/controller");
const post = require("../../models/post");

router.route("/").get(controller.findAllPosts);
router.route("/new").post(controller.createNewPost);

module.exports = router;
