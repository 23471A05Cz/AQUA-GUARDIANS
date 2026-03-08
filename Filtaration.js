import React from "react";
import sedimentationImg from "./image/sed.jpeg";
import filtrationImg from "./image/fil.jpeg";
import uvImg from "./image/uv.jpeg";
import bottlingImg from "./image/bot.jpeg";

export default function WaterFiltration() {
  const steps = [
    {
      title: "Sedimentation",
      description:
        "In this step, large particles and sediments are allowed to settle at the bottom of the tank.",
      image: sedimentationImg,
    },
    {
      title: "Filtration",
      description:
        "Water passes through layers of sand, gravel, and charcoal to remove smaller impurities.",
      image: filtrationImg,
    },
    {
      title: "UV Treatment",
      description:
        "Ultraviolet light is used to kill bacteria and other microorganisms in the water.",
      image: uvImg,
    },
    {
      title: "Bottling",
      description:
        "The filtered and safe water is then bottled under hygienic conditions for distribution.",
      image: bottlingImg,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#caf0f8",
        padding: "20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0d47a1",
          marginBottom: "30px",
          fontSize: "32px",
        }}
      >
        💧 Water Filtration Process
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              background: "#e1f5fe",
              borderRadius: "12px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={step.image}
              alt={step.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h2 style={{ color: "#01579B", marginBottom: "8px" }}>{step.title}</h2>
            <p style={{ fontSize: "14px", color: "#202424" }}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
