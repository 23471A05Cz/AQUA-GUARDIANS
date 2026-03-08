import React, { useState } from 'react';
import axios from 'axios';
import back from './image/ss7.jpg'; // your background image

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Styles
  const style = {
    minHeight: '100vh',
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '40px',
  };

  const formContainer = {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start', // form on the left
    alignItems: 'center',
  };

  const formStyle = {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '30px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '400px',
    color: 'white',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#00ffff',
    color: '#000',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password,
      });
      setMessage(res.data.message); // Registration success
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <section style={style}>
      {/* Left side: Form */}
      <div style={formContainer}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: '20px', color: '#00ffff' }}>Register</h2>
          <input
            style={inputStyle}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
          {message && <p style={{ marginTop: '15px', color: '#00ffff' }}>{message}</p>}
        </form>
      </div>

      
    </section>
  );
}