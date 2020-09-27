const compression = require('compression'); // Optional
const express = require("express");
const helmet= require("helmet");
const routes = require("./routes.js")

const app = express();



// CONFIG
app.set("port", process.env.PORT || 3000);
app.use(compression({threshold:0})); // Optional
app.use(helmet())
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
app.use(helmet.contentSecurityPolicy(
	{directives:{
		defaultSrc:["'self'"],
		scriptSrc:[
			"'self'",
			"'sha256-XzAtNAF+kB7svgclO/61MZ+Sm/3IWjpY7RWe35DvABA='", //Inline script to check if Bootstrap CSS CDN is working
			"'sha256-oWaNJ4LNTPFWiM2no6qscSlA9JBocpYs2m2CnJxGJ1M='", //Inline script to check if Bootstrap-Native JS CDN is working
			"'sha384-kvQSltvHvSg/3tzsKo6WscGmhSm10Tqg7f4Sn+okA4GdpCI/h8UjPpU/M4ea/z9V'", //Bootstrap-Native JS CDN
		],
		styleSrc:[
			"'self'",
			"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css", // Allow Bootstrap CDN css
		]

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
