import React, { useState } from 'react';
import back from './image/cz5.jpg';

const style = {
  minHeight: 'calc(100vh - 70px)',
  backgroundImage: `url(${back})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '40px',
  fontFamily: "'Poppins', sans-serif",
};

export default function Mission() {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <section style={style}>
      <h1
        style={{
          fontFamily: "'Roboto', sans-serif",
          color: '#ffca28', // amber/gold for contrast
          fontSize: '1.8rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // makes text pop
        }}
      >
        Our Mission
      </h1>

      <h4
        style={{
          color: '#ffffff', // pure white for readability
          fontSize: '1.3rem',
          lineHeight: '1.7',
          textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
        }}
      >
        We are a non-profit organization committed to ensuring clean water reaches every classroom.
        Our team consists of volunteers, engineers, and educators united by one goal: clean water for all.
      </h4>

      <h4
        style={{
          color: '#e0f7fa', // very light teal
          fontSize: '1.3rem',
          lineHeight: '1.7',
          marginTop: '15px',
          textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
        }}
      >
        Over the years, we have successfully installed filtration systems and launched awareness programs.
      </h4>

      <button
        style={{
          backgroundColor: '#00e5ff', // bright cyan button
          border: 'none',
          color: '#0d47a1', // dark blue text inside button
          padding: '10px 24px',
          marginTop: '20px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          transition: '0.3s',
        }}
        onClick={() => setShowExtra(!showExtra)}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#26c6da')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#00e5ff')}
      >
        {showExtra ? 'Read Less' : 'Read More'}
      </button>

      {showExtra && (
        <h4
          style={{
            marginTop: '30px',
            color: '#ffffff', // white text
            fontFamily: "'Roboto', sans-serif",
            fontSize: '1.2rem',
            lineHeight: '1.6',
            textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
          }}
        >
          Since our launch, we have supported over 300 schools by installing filtration units and conducting workshops that
          educate children and communities about the importance of safe water.
        </h4>
      )}
    </section>
  );
}
