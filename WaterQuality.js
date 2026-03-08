import React, { useState } from "react";

export default function WaterQualityChecker() {
  const [quality, setQuality] = useState({ ph: "", tds: "", turbidity: "" });
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    setQuality({ ...quality, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ph = parseFloat(quality.ph);
    const tds = parseFloat(quality.tds);
    const turbidity = parseFloat(quality.turbidity);

    const newSuggestions = [];

    if (isNaN(ph) || isNaN(tds) || isNaN(turbidity)) {
      setSuggestions([{ param: "Error", msg: "Please enter valid numbers for all fields", type: "danger" }]);
      return;
    }

    // pH
    if (ph < 6.5) newSuggestions.push({ param: "pH", msg: "Water is acidic. Adjust pH.", type: "danger" });
    else if (ph > 8.5) newSuggestions.push({ param: "pH", msg: "Water is basic. Adjust pH.", type: "danger" });
    else newSuggestions.push({ param: "pH", msg: "pH is safe.", type: "safe" });

    // TDS
    if (tds > 500) newSuggestions.push({ param: "TDS", msg: "High TDS. Use RO or bottled water.", type: "danger" });
    else if (tds < 50) newSuggestions.push({ param: "TDS", msg: "TDS is low. Consider minerals.", type: "caution" });
    else newSuggestions.push({ param: "TDS", msg: "TDS is safe.", type: "safe" });

    // Turbidity
    if (turbidity > 5) newSuggestions.push({ param: "Turbidity", msg: "Water is cloudy. Filter or boil.", type: "danger" });
    else if (turbidity > 1) newSuggestions.push({ param: "Turbidity", msg: "Slight turbidity. Filter before use.", type: "caution" });
    else newSuggestions.push({ param: "Turbidity", msg: "Water is clear.", type: "safe" });

    setSuggestions(newSuggestions);
  };

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#caf0f8", // Deep blue background for the entire page
    padding: "40px 20px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
    fontFamily: "'Poppins', sans-serif",
  };

  const formStyle = (width) => ({
    flex: "0 0 " + width,
    minWidth: "250px",
    backgroundColor: "#BBDEFB", // Lighter blue for form boxes
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
  });

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #90CAF9",
    outline: "none",
    fontWeight: "bold",
    backgroundColor: "#E3F2FD", // Lighter blue for input
    color: "#01579B",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "50px",
    border: "none",
    backgroundColor: "#0288D1",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
  };

  const suggestionCardStyle = (type) => {
    let bg, color;
    switch (type) {
      case "safe":
        bg = "#C8E6C9"; color = "#2E7D32"; break;
      case "caution":
        bg = "#FFF9C4"; color = "#F9A825"; break;
      case "danger":
        bg = "#FFCDD2"; color = "#C62828"; break;
      default:
        bg = "#E1F5FE"; color = "#01579B";
    }
    return {
      backgroundColor: bg,
      padding: "12px",
      borderRadius: "12px",
      marginBottom: "10px",
      color,
      fontWeight: "600",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    };
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Left: Input Form (smaller width) */}
        <form style={formStyle("350px")} onSubmit={handleSubmit}>
          <h2 style={{ color: "#01579B", textAlign: "center", marginBottom: "20px" }}>💧 Water Quality Checking</h2>
          <input type="number" name="ph" placeholder="Enter pH (6.5 - 8.5)" value={quality.ph} onChange={handleChange} style={inputStyle} />
          <input type="number" name="tds" placeholder="Enter TDS (ppm)" value={quality.tds} onChange={handleChange} style={inputStyle} />
          <input type="number" name="turbidity" placeholder="Enter Turbidity (NTU)" value={quality.turbidity} onChange={handleChange} style={inputStyle} />
          <button type="submit" style={buttonStyle}>Check Quality</button>
        </form>

        {/* Right: Suggestions Form (visible from start) */}
        <div style={formStyle("400px")}>
          <h2 style={{ color: "#01579B", textAlign: "center", marginBottom: "20px" }}>💡 Suggestions</h2>
          {suggestions.length > 0 ? (
            suggestions.map((s, idx) => (
              <div key={idx} style={suggestionCardStyle(s.type)}>
                <strong>{s.param}:</strong> {s.msg}
              </div>
            ))
          ) : (
            <p style={{ color: "#01579B", textAlign: "center" }}>Suggestions will appear here after checking water quality.</p>
          )}
        </div>
      </div>
    </div>
  );
}
