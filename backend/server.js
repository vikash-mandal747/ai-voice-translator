const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const translateRoutes = require("./routes/translateRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("AI Voice Translator Backend is running");
});

// Routes
app.use("/api/translate", translateRoutes );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
