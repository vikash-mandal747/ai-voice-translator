const express = require("express");
const { translateText } = require("../services/translator");

const router = express.Router();

// POST /api/translate
router.post("/", async (req, res) => {
  try {
    const { text, model } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const translated = await translateText(text, model);
    res.json({ translated });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});


module.exports = router;
