// Requiring our models and passport as we've configured it
// var db = require("../../models");
var passport = require("../../config/passport.js");
const { User } = require("../../controllers/index");

const router = require("express").Router();

//Should match "/api/users/..."
router.route("/signup").post(User.create);

router.route("/login").post(function (req, res, next) {
	passport.authenticate("local", function (err, user, info) {
		console.log("Attempting to Log:");
		console.log(user);
		if (err) {
			//return next(err); // will generate a 500 error
			return res.send({ success: false, message: "authentication failed" });
		}
		// Generate a JSON response reflecting authentication status
		if (!user) {
			return res.send({ success: false, message: "authentication failed" });
		}
		// ***********************************************************************
		// "Note that when using a custom callback, it becomes the application's
		// responsibility to establish a session (by calling req.login()) and send
		// a response."
		// Source: http://passportjs.org/docs
		// ***********************************************************************

		if (user) {
			req.login(user, (loginErr) => {
				if (loginErr) {
					//return next (loginErr);
					return next({ success: false, message: loginErr });
				}
			});
			return res.send({ success: true, message: "authentication succeeded" });
		}
	})(req, res, next);
});

router.route("/user").get(function (req, res) {
	if (req.user) {
		return res.send({ user: req.user });
	}
});

// router.route("/")
// .get(userController.findAll);
// Route for logging user out
router.route("/logout").get(function (req, res) {
	req.logout();
	res.redirect("/");
});

module.exports = router;
