// Requiring our models and passport as we've configured it
// var db = require("../../models");
var passport = require("../../config/passport.js");
const { User } = require("../../controllers/index");

const router = require("express").Router();

//Should match "/api/users/..."
router.route("/signup").post(User.create);

router
	.route("/login")
	.post(passport.authenticate("local"), function (req, res) {
		console.log("login " + req.body);
		res.status(202).json({
			_id: req.user._id,
			username: req.user.username,
			email: req.user.email,
		});
	});

router.route("/login").post(function (req, res) {
	console.log("posting: " + req.body);
});

// router.route("/")
// .get(userController.findAll);
// Route for logging user out
router.route("/logout").get(function (req, res) {
	req.logout();
	res.redirect("/");
});

module.exports = router;
