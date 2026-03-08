import React from 'react';
import img1 from './image/9.jpg';
import img2 from './image/44.jpg';
import img3 from './image/cz3.jpg';

const sectionStyle = {
  minHeight: '100vh',
  padding: '40px 20px',
  fontFamily: "'Poppins', sans-serif",
  backgroundColor: '#caf0f8', // light blue background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
};

const containerStyle = {
  width: '100%',
  maxWidth: '1000px',
  textAlign: 'center',
};

const titleStyle = {
  fontFamily: "'Merriweather', serif",
  color: '#0d47a1',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '30px',
};

const imagesContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '50px', // gap between images
  flexWrap: 'wrap',
  marginBottom: '30px',
};

const imgStyle = {
  width: '300px',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '20px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
};

const contentStyle = {
  fontSize: '1.1rem',
  color: '#023e8a',
  lineHeight: '1.6',
  maxWidth: '700px',
  margin: '0 auto',
};

export default function About() {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>About Us</h1>
        <div style={imagesContainer}>
          {[img1, img2, img3].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`About ${idx + 1}`}
              style={imgStyle}
            />
          ))}
        </div>

        {/* Content about water saving in schools */}
        <div style={contentStyle}>
          <p>
            Schools play a vital role in teaching students the importance of water conservation.
            By adopting simple practices like turning off taps, fixing leaks, and reusing water,
            students learn to value this precious resource.
          </p>
        </div>
      </div>
    </section>
  );
}
