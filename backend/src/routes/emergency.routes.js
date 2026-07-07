const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Emergency API working 🚑",
  });
});

module.exports = router;