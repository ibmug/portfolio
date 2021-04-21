const { Post } = require("../models");

//Controllers should not be returning any res, that should be the task of routes...
module.exports = {
	findAll: function (req, res) {
		Post.find(req.query)
			// .sort({date})
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(418).json({ message: err }));
	},
	findById: function (req, res) {
		Post.findById(req.params.id)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(418).json({ message: err }));
	},
	create: function (req, res) {
		console.log(req.body);
		Post.create({
			title: req.body.title,
			description: req.body.description,
			user: req.user.username,
			//Maybe get location and other stuff..
		})
			.then((dbModel) => res.json({ message: "Creation Succesful!" }))
			.catch((err) => {
				res.status(418).json({ message: err });
			});
	},
};
