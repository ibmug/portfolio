import axios from "axios";

export default {
	// Gets all posts
	getUser: function () {
		return axios.get("/api/users");
	},
	// Gets the post with the given id
	createUser: function (username, password, email) {
		console.log("Creating User");
		return axios.post("/api/users/signup", {
			username: username,
			password: password,
			email: email,
		});
	},
	login: function (username, password) {
		return axios.post("/api/users/login", {
			username: username,
			password: password,
		});
	},
	createPost: function (from, title, description) {
		return axios.post("/api/post/add", {
			from: from,
			title: title,
			description: description,
		});
	},
};
