// frontend/src/components/Translator.jsx
import React, { useState } from "react";
import axios from "axios";
import "./Translator.css"; // Import the CSS for the globe

const Translator = () => {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");

  const handleTranslate = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/translate", {
        text,
        model: "Helsinki-NLP/opus-mt-en-hi", // default (you can make dynamic later)
      });
      setTranslated(response.data.translated);
    } catch (err) {
      console.error(err);
      alert("Translation failed");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      {/* Spinning Globe */}
      <div className="globe"></div>

      <h2>🌐 GenAI Translator</h2>

      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
      />

      <br />

      <button onClick={handleTranslate} style={{ marginTop: "10px" }}>
        Translate
      </button>

      {translated && (
        <div style={{ marginTop: "20px" }}>
          <h3>Translated Text:</h3>
          <p>{translated}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
