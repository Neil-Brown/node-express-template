const express = require("express");
const router = express.Router();

// Home

router.get("/", (req, res) => {
  res.render("home.pug", { nonce: res.locals.nonce }); // ✅ Ensure nonce is passed to Pug
});

module.exports = router;
