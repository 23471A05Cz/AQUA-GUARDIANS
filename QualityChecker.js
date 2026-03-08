
import React, { useState } from "react";

export default function WaterQualityChecker() {
  const [villages] = useState([
    {
      id: 1,
      name: "Pedda Komera",
      plants: [
        { id: 101, name: "Pedda Komera Aqua", ph: 9.2, turbidity: 3.2, tds: 280 },
        { id: 102, name: "Sai Aqua Plant", ph: 9.0, turbidity: 6.5, tds: 600 }, // unsafe
        { id: 103, name: "Fresh Water Co", ph: 6.8, turbidity: 4.2, tds: 310 },
        { id: 104, name: "Crystal Aqua", ph: 8.7, turbidity: 5.5, tds: 520 }, // unsafe
        { id: 105, name: "Blue Drop", ph: 7.1, turbidity: 2.5, tds: 290 },
        { id: 106, name: "Spring Aqua", ph: 9.8, turbidity: 3.8, tds: 310 },
        { id: 107, name: "WaterPure", ph: 6.2, turbidity: 4.5, tds: 480 }, // unsafe
        { id: 108, name: "PureFlow", ph: 7.3, turbidity: 3.1, tds: 295 },
        { id: 109, name: "H2O Crystal", ph: 7.6, turbidity: 3.0, tds: 285 },
        { id: 110, name: "Clear Aqua", ph: 9.4, turbidity: 3.3, tds: 275 },
      ],
    },
    {
      id: 2,
      name: "Narsapur",
      plants: [
        { id: 201, name: "Narsapur Aqua Fresh", ph: 9.0, turbidity: 2.5, tds: 260 },
        { id: 202, name: "Blue Drop Water", ph: 8.7, turbidity: 5.8, tds: 540 }, // unsafe
        { id: 203, name: "Pure Aqua Narsapur", ph: 7.2, turbidity: 3.0, tds: 300 },
        { id: 204, name: "Crystal Narsapur", ph: 9.5, turbidity: 3.5, tds: 280 },
        { id: 205, name: "Fresh Spring", ph: 6.3, turbidity: 6.0, tds: 520 }, // unsafe
        { id: 206, name: "Aqua Plus", ph: 7.8, turbidity: 2.9, tds: 270 },
        { id: 207, name: "Clean Water Co", ph: 9.0, turbidity: 3.2, tds: 290 },
        { id: 208, name: "H2O Narsapur", ph: 7.6, turbidity: 3.1, tds: 295 },
        { id: 209, name: "Spring Aqua Fresh", ph: 9.3, turbidity: 3.4, tds: 285 },
        { id: 210, name: "Clear Flow", ph: 7.5, turbidity: 3.0, tds: 275 },
      ],
    },
    {
      id: 3,
      name: "Anantharam",
      plants: [
        { id: 301, name: "Anantharam Pure Water", ph: 10.5, turbidity: 3.0, tds: 280 },
        { id: 302, name: "Crystal Aqua Center", ph: 9.0, turbidity: 7.5, tds: 610 }, // unsafe
        { id: 303, name: "Pure Life Anantharam", ph: 7.1, turbidity: 2.8, tds: 290 },
        { id: 304, name: "FreshFlow", ph: 6.4, turbidity: 5.5, tds: 500 }, // unsafe
        { id: 305, name: "Aqua Anantharam", ph: 9.8, turbidity: 3.2, tds: 300 },
        { id: 306, name: "H2O Center", ph: 7.2, turbidity: 2.9, tds: 280 },
        { id: 307, name: "Clear Water Plant", ph: 8.1, turbidity: 4.0, tds: 310 },
        { id: 308, name: "Blue Spring", ph: 6.9, turbidity: 3.5, tds: 295 },
        { id: 309, name: "WaterKing", ph: 7.4, turbidity: 3.1, tds: 285 },
        { id: 310, name: "Safe Aqua", ph: 8.0, turbidity: 3.3, tds: 275 },
      ],
    },
    {
      id: 4,
      name: "Kothapet",
      plants: [
        { id: 401, name: "Kothapet Water Supply", ph: 8.1, turbidity: 3.6, tds: 290 },
        { id: 402, name: "Kaveri Mineral Plant", ph: 9.1, turbidity: 8.0, tds: 540 }, // unsafe
        { id: 403, name: "Clear Aqua Kothapet", ph: 9.3, turbidity: 3.1, tds: 300 },
        { id: 404, name: "Fresh Water Co", ph: 7.6, turbidity: 3.8, tds: 285 },
        { id: 405, name: "Crystal Spring", ph: 6.2, turbidity: 4.5, tds: 480 }, // unsafe
        { id: 406, name: "Pure Aqua", ph: 7.5, turbidity: 3.0, tds: 290 },
        { id: 407, name: "H2O Flow", ph: 9.0, turbidity: 3.2, tds: 295 },
        { id: 408, name: "Blue Drop Plant", ph: 7.7, turbidity: 3.3, tds: 275 },
        { id: 409, name: "Spring Aqua", ph: 7.4, turbidity: 3.1, tds: 285 },
        { id: 410, name: "Water Pure Co", ph: 9.2, turbidity: 3.0, tds: 280 },
      ],
    },
    {
      id: 5,
      name: "Mallavalli",
      plants: [
        { id: 501, name: "Mallavalli Aqua", ph: 9.1, turbidity: 3.3, tds: 285 },
        { id: 502, name: "Fresh Spring", ph: 6.0, turbidity: 5.8, tds: 520 }, // unsafe
        { id: 503, name: "Blue Flow", ph: 9.4, turbidity: 3.0, tds: 275 },
        { id: 504, name: "Crystal Aqua", ph: 7.6, turbidity: 3.2, tds: 290 },
        { id: 505, name: "Pure Water Co", ph: 9.0, turbidity: 6.5, tds: 600 }, // unsafe
        { id: 506, name: "Spring Aqua Mallavalli", ph: 7.2, turbidity: 3.1, tds: 295 },
        { id: 507, name: "H2O Center", ph: 9.0, turbidity: 3.3, tds: 285 },
        { id: 508, name: "WaterPure", ph: 7.5, turbidity: 3.0, tds: 280 },
        { id: 509, name: "Blue Drop Plant", ph: 7.3, turbidity: 3.1, tds: 290 },
        { id: 510, name: "Clear Aqua Co", ph: 4.6, turbidity: 3.2, tds: 295 },
      ],
    },
    {
      id: 6,
      name: "Ramavarapumodi",
      plants: [
        { id: 601, name: "Ramavarapumodi Aqua", ph: 5.5, turbidity: 3.2, tds: 280 },
        { id: 602, name: "Fresh Flow Plant", ph: 6.8, turbidity: 4.0, tds: 300 },
        { id: 603, name: "Crystal Aqua Center", ph: 9.2, turbidity: 6.5, tds: 610 }, // unsafe
        { id: 604, name: "Pure Aqua", ph: 7.1, turbidity: 3.3, tds: 285 },
        { id: 605, name: "H2O Spring", ph: 9.4, turbidity: 3.0, tds: 275 },
        { id: 606, name: "Blue Drop Ramavarapumodi", ph: 6.2, turbidity: 5.5, tds: 500 }, // unsafe
        { id: 607, name: "Clear Aqua", ph: 7.6, turbidity: 3.1, tds: 295 },
        { id: 608, name: "Spring Water", ph: 9.0, turbidity: 3.2, tds: 285 },
        { id: 609, name: "WaterPure Center", ph: 7.3, turbidity: 3.0, tds: 280 },
        { id: 610, name: "Safe Aqua Co", ph: 7.5, turbidity: 3.1, tds: 290 },
      ],
    },
    {
      id: 7,
      name: "Satuluru",
      plants: [
        { id: 701, name: "Satuluru Aqua Plant", ph: 9.1, turbidity: 3.2, tds: 285 },
        { id: 702, name: "Crystal Aqua Satuluru", ph: 9.0, turbidity: 6.0, tds: 580 }, // unsafe
        { id: 703, name: "Pure Water Co", ph: 7.3, turbidity: 3.1, tds: 290 },
        { id: 704, name: "Blue Drop Center", ph: 9.5, turbidity: 3.3, tds: 275 },
        { id: 705, name: "Fresh Aqua", ph: 6.0, turbidity: 5.5, tds: 510 }, // unsafe
        { id: 706, name: "Spring Aqua Plant", ph: 7.2, turbidity: 3.0, tds: 280 },
        { id: 707, name: "H2O Flow", ph: 7.6, turbidity: 3.1, tds: 295 },
        { id: 708, name: "Clear Aqua Satuluru", ph: 7.4, turbidity: 3.2, tds: 285 },
        { id: 709, name: "WaterPure", ph: 9.5, turbidity: 3.0, tds: 290 },
        { id: 710, name: "Safe Spring", ph: 7.5, turbidity: 3.2, tds: 295 },
      ],
    },
    {
      id: 8,
      name: "Mallaparajugudem",
      plants: [
        { id: 801, name: "Mallaparajugudem Aqua", ph: 7.4, turbidity: 3.1, tds: 280 },
        { id: 802, name: "Crystal Spring", ph: 6.2, turbidity: 5.5, tds: 500 }, // unsafe
        { id: 803, name: "Blue Drop Center", ph: 7.5, turbidity: 3.0, tds: 285 },
        { id: 804, name: "Pure Aqua Plant", ph: 9, turbidity: 3.2, tds: 290 },
        { id: 805, name: "H2O Flow", ph: 7.0, turbidity: 3.1, tds: 280 },
        { id: 806, name: "Fresh Aqua Co", ph: 7.6, turbidity: 3.3, tds: 295 },
        { id: 807, name: "WaterPure Center", ph: 7.3, turbidity: 3.0, tds: 285 },
        { id: 808, name: "Safe Spring Plant", ph: 9.5, turbidity: 3.2, tds: 290 },
        { id: 809, name: "Clear Aqua Mallaparajugudem", ph: 7.4, turbidity: 3.1, tds: 280 },
        { id: 810, name: "Blue Aqua Co", ph: 9.0, turbidity: 6.0, tds: 580 }, // unsafe
      ],
    },
    {
      id: 9,
      name: "Rangannagudem",
      plants: [
        { id: 901, name: "Rangannagudem Aqua", ph: 7.2, turbidity: 3.1, tds: 280 },
        { id: 902, name: "Crystal Spring Plant", ph: 6.0, turbidity: 5.5, tds: 510 }, // unsafe
        { id: 903, name: "Blue Drop Center", ph: 7.3, turbidity: 3.0, tds: 285 },
        { id: 904, name: "Pure Aqua Co", ph: 5, turbidity: 3.2, tds: 290 },
        { id: 905, name: "H2O Flow Plant", ph: 7.0, turbidity: 3.1, tds: 280 },
        { id: 906, name: "Fresh Aqua Co", ph: 7.6, turbidity: 3.3, tds: 295 },
        { id: 907, name: "WaterPure Center", ph: 7.4, turbidity: 3.0, tds: 285 },
        { id: 908, name: "Safe Spring Plant", ph: 11, turbidity: 3.2, tds: 290 },
        { id: 909, name: "Clear Aqua Rangannagudem", ph: 7.4, turbidity: 3.1, tds: 280 },
        { id: 910, name: "Blue Aqua Co", ph: 9.0, turbidity: 9, tds: 580 }, // unsafe
      ],
    },
    {
      id: 10,
      name: "Remalli",
      plants: [
        { id: 1001, name: "Remalli Aqua", ph: 10, turbidity: 3.1, tds: 280 },
        { id: 1002, name: "Crystal Spring Plant", ph: 6.0, turbidity: 5.5, tds: 510 }, // unsafe
        { id: 1003, name: "Blue Drop Center", ph: 7.3, turbidity: 3.0, tds: 285 },
        { id: 1004, name: "Pure Aqua Co", ph: 7.5, turbidity: 3.2, tds: 290 },
        { id: 1005, name: "H2O Flow Plant", ph: 9.5, turbidity: 3.1, tds: 280 },
        { id: 1006, name: "Fresh Aqua Co", ph: 7.6, turbidity: 3.3, tds: 295 },
        { id: 1007, name: "WaterPure Center", ph: 7.4, turbidity: 3.0, tds: 285 },
        { id: 1008, name: "Safe Spring Plant", ph: 7.5, turbidity: 3.2, tds: 290 },
        { id: 1009, name: "Clear Aqua Remalli", ph: 5, turbidity: 3.1, tds: 280 },
        { id: 1010, name: "Blue Aqua Co", ph: 9.0, turbidity: 6.0, tds: 580 }, // unsafe
      ],
    },
  ]);
  const [selectedVillageId, setSelectedVillageId] = useState("");
  const [selectedPlantId, setSelectedPlantId] = useState("");
  const [showResult, setShowResult] = useState(false);

  const selectedVillage = villages.find((v) => v.id === parseInt(selectedVillageId));
  const selectedPlant = selectedVillage?.plants.find((p) => p.id === parseInt(selectedPlantId));

  const checkWaterSafety = (ph, turbidity, tds) =>
    ph >= 6.5 && ph <= 8.5 && turbidity < 5 && tds <= 500
      ? "✅ Water is Safe to Drink"
      : "❌ Water is Not Safe";

  const handleSubmit = () => {
    if (selectedPlant) {
      setShowResult(true);
    } else {
      alert("Please select a plant!");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
        background: "#caf0f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#B3E5FC",
          width: "100%",
          maxWidth: "450px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          padding: "15px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <h2 style={{ color: "#01579B", textAlign: "center", marginBottom: "15px" }}>
          💧 Water Quality Checker
        </h2>

        {/* Compact Form */}
        <div
          style={{
            background: "#E1F5FE",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <select
            value={selectedVillageId}
            onChange={(e) => {
              setSelectedVillageId(e.target.value);
              setSelectedPlantId("");
              setShowResult(false);
            }}
            style={{
              padding: "6px",
              borderRadius: "5px",
              border: "1px solid #81D4FA",
              background: "#fff",
              fontWeight: "bold",
              color: "#01579B",
            }}
          >
            <option value="">-- Select Village --</option>
            {villages.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>

          {selectedVillage && (
            <select
              value={selectedPlantId}
              onChange={(e) => {
                setSelectedPlantId(e.target.value);
                setShowResult(false);
              }}
              style={{
                padding: "6px",
                borderRadius: "5px",
                border: "1px solid #81D4FA",
                background: "#fff",
                fontWeight: "bold",
                color: "#01579B",
              }}
            >
              <option value="">-- Select Plant --</option>
              {selectedVillage.plants.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleSubmit}
            style={{
              padding: "8px",
              borderRadius: "5px",
              background: "#0277BD",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>

        {/* Show Details After Submit */}
        {showResult && selectedPlant && (
          <div>
            <div
              style={{
                background: "#E1F5FE",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "10px",
                border: "1px solid #81D4FA",
                color: "#01579B",
                fontWeight: "bold",
              }}
            >
              <p>Plant: {selectedPlant.name}</p>
              <p>pH: {selectedPlant.ph}</p>
              <p>Turbidity: {selectedPlant.turbidity} NTU</p>
              <p>TDS: {selectedPlant.tds} ppm</p>
            </div>

            <p
              style={{
                fontWeight: "bold",
                padding: "8px",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: checkWaterSafety(
                  selectedPlant.ph,
                  selectedPlant.turbidity,
                  selectedPlant.tds
                ).includes("Safe")
                  ? "#C8E6C9"
                  : "#FFCDD2",
                color: checkWaterSafety(selectedPlant.ph, selectedPlant.turbidity, selectedPlant.tds).includes(
                  "Safe"
                )
                  ? "#2E7D32"
                  : "#C62828",
              }}
            >
              {checkWaterSafety(selectedPlant.ph, selectedPlant.turbidity, selectedPlant.tds)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
