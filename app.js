const compression = require('compression'); // Optional
const crypto = require('crypto');
const express = require("express");
const helmet= require("helmet");
const routes = require("./routes.js")

const app = express();

// CONFIG
app.set("port", process.env.PORT || 3000);

// template variables
app.use((req, res, next) => {
  res.locals.nonce = crypto.randomBytes(16).toString("base64"); // Generate unique nonce per request
  next();
});

app.use(compression({threshold:0})); // Optional
 app.use(helmet())
 app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
 app.use(helmet.contentSecurityPolicy(
 	{directives:{
 		defaultSrc:["'self'"],
 		scriptSrc:[
 			"'self'",
 			"https://cdn.jsdelivr.net/npm/bootstrap.native@5.1.2/dist/bootstrap-native.min.js",
 			(req, res) => `'nonce-${res.locals.nonce}'`,

 		],
 		styleSrc:[
 			"'self'",
 			"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
 			(req, res) => `'nonce-${res.locals.nonce}'`,
 		],
 		imgSrc: ["'self'", "data:"],

 		}
 	}
 ))

app.use(express.static(__dirname + "/public/"));
app.set("view engine", "pug");
app.use("/", routes);

// ROUTES
// Render the app view
app.get("/", function(req, res) {
	res.render("index");
});


// SERVER
const server = app.listen(process.env.PORT || 3000, () => {
    console.log("The app is running on localhost:3000")
});

module.exports = server;
