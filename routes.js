const express = require("express");
const router = express.Router();

// Home
router.get("/", async function(req, res) {
  res.render("\home.pug");
});

router.get("/piano", async function(req, res) {
  res.render("\piano.pug");
});

module.exports = router;
