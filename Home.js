import React from "react";

export default function Home() {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label="Background video showing water waves"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source
          src="/videos/1893746-uhd_3840_2160_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Text Content Positioned at Top */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "#ffffff",
          paddingTop: "10px", // moved content closer to top
          paddingLeft: "20px",
          paddingRight: "20px",
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
        }}
      >
        {/* Project Title */}
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "800",
            color: "#0d47a1", // Blue title color
            marginBottom: "15px",
            textShadow: "1px 1px 5px rgba(255,255,255,0.3)",
          }}
        >
          AquaGuardians
        </h1>

        {/* Awareness Content */}
        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          Checking water quality in villages helps ensure that the water used for
          drinking, cooking, and daily activities is safe and healthy. By
          testing key parameters such as <strong>pH</strong>,{" "}
          <strong>TDS</strong> (Total Dissolved Solids), and{" "}
          <strong>Turbidity</strong>, communities can identify unsafe sources and
          take corrective action. Maintaining the recommended pH (6.5–8.5), low
          TDS, and minimal turbidity reduces disease risk and improves hygiene.
          Regular testing empowers villages to protect children’s health and
          build stronger, healthier communities.
        </p>
      </div>
    </div>
  );
}
