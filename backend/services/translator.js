const axios = require("axios");
require("dotenv").config();

const HF_API_KEY = process.env.HF_API_KEY;

async function translateText(text, model = "Helsinki-NLP/opus-mt-en-fr") {
  try {
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${model}`,
      { inputs: text },
      { headers: { Authorization: `Bearer ${HF_API_KEY}` } },
    );

    if (response.data.error) {
      console.log("HF API Error:", response.data); // <-- log actual error
      throw new Error(response.data.error);
    }

    return response.data[0].translation_text;
  } catch (err) {
    console.log("Caught Error:", err.response?.data || err.message);
    throw new Error("Translation failed..");
  }
}

module.exports = { translateText };
