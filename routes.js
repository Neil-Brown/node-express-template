const express = require("express");
const router = express.Router();

// Home
router.get("/", async function(req, res) {
  res.render("\home.pug");
});

module.exports = router;
