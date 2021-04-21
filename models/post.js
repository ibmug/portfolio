const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
	//creator: { type: String, required: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
	crDate: { type: Date, default: Date.now, required: true },
	//password: { type: String, get: decrypt, set: encrypt, required: true },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
