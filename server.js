console.log(
	require("dotenv").config({ path: __dirname + "/config/config.env" })
);
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const mongoose = require("mongoose");
const routes = require("./routes");
var fs = require("fs");
var path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	session({ secret: "doctor cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//Set a mongo connection.
const uri =
	"mongodb+srv://" +
	process.env.DB_USER +
	":" +
	process.env.DB_PASS +
	"@cluster0.om7ei.mongodb.net/dungeonsDB?retryWrites=true&w=majority";
try {
	mongoose.connect(process.env.MONGODB_URI || uri);
} catch (error) {
	console.log(error);
}

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
