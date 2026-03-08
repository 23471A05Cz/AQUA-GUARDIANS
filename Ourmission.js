import React from "react";

export default function OurMission() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "black",
        background: "rgba(202, 240, 248, 0.7)",
        backdropFilter: "blur(10px)",
        overflowY: "auto", // Scroll enable
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "55px",
          fontWeight: "900",
          color: "#0077b6",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Our Mission
      </h1>

      {/* Mission Description */}
      <p
        style={{
          maxWidth: "900px",
          fontSize: "19px",
          lineHeight: "1.8",
          textAlign: "center",
          margin: "0 auto 50px",
        }}
      >
        At <strong>AquaGuardians</strong>, our mission is to empower communities with{" "}
        <strong>safe and clean drinking water</strong>. We provide tools to check water quality, 
        educate about hygiene, and promote sustainable practices in villages. Our goal is to reduce 
        waterborne diseases and make clean water accessible to all.
      </p>

      {/* Mission Boxes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto 50px",
        }}
      >
        {[
          {
            title: "Water Testing",
            desc: "Easy methods for communities to check water safety regularly.",
            color: "#90e0ef",
          },
         
          {
            title: "Student Programs",
            desc: "Engage schools with activities and competitions about water safety.",
            color: "#90e0ef",
          },
          {
            title: "Sustainable Practices",
            desc: "Promote long-term clean water solutions and community initiatives.",
            color: "#90e0ef",
            
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: item.color,
              color: item.textColor || "#004d73",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Extra Text */}
      <p
        style={{
          maxWidth: "900px",
          fontSize: "18px",
          lineHeight: "1.8",
          textAlign: "center",
          margin: "0 auto 50px",
        }}
      >
        Our ultimate vision is to make water safety easy to understand and actionable for everyone. 
        Through education, community engagement, and modern tools, we strive for a future where 
        clean water is a right, not a privilege.
      </p>
    </div>
  );
}
