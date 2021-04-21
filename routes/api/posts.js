// Requiring our models and passport as we've configured it
// var db = require("../../models");
var passport = require("../../config/passport.js");
const { Post } = require("../../controllers/index");

const router = require("express").Router();

//Should match "/api/users/..."
router.route("/add").post(Post.create);

module.exports = router;
