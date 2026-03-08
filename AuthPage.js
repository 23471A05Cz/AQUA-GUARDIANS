import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Add this

export default function AuthPage() {
  const navigate = useNavigate(); // ✅ Navigation hook
  const [isRegister, setIsRegister] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  // Page style
  const style = {
    minHeight: "100vh",
    backgroundColor: "#caf0f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    fontFamily: "'Poppins', sans-serif",
    padding: "60px 20px",
  };

  const formStyle = {
    backgroundColor: "#B3E5FC",
    padding: "25px",
    borderRadius: "12px",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    border: "1px solid #81D4FA",
  };

  const inputStyle = {
    borderRadius: "8px",
    padding: "10px",
    width: "100%",
    marginBottom: "12px",
    border: "1px solid #90CAF9",
    outline: "none",
    fontWeight: "bold",
    color: "#01579B",
    background: "#E1F5FE",
  };

  const buttonStyle = {
    backgroundColor: "#0288D1",
    border: "none",
    color: "white",
    padding: "10px 25px",
    borderRadius: "50px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s ease",
    width: "100%",
  };

  const switchButtonStyle = {
    marginTop: "12px",
    backgroundColor: "transparent",
    color: "#01579B",
    padding: "8px 20px",
    borderRadius: "50px",
    border: "1px solid #90CAF9",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s ease",
  };

  // Login Submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", loginData);
      setMessage(res.data.message);

      // ✅ Redirect to Water Quality Page
      navigate("/waterquality");

      setLoginData({ email: "", password: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  // Register Submit
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/register", registerData);
      setMessage(res.data.message);
      setRegisterData({ name: "", email: "", password: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section style={style}>
      {/* Login Form */}
      {!isRegister && (
        <form style={formStyle} onSubmit={handleLoginSubmit}>
          <h3 style={{ marginBottom: "20px", color: "#01579B" }}>Login</h3>
          <input
            style={inputStyle}
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            required
          />
          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            required
          />
          <button type="submit" style={buttonStyle}>
            Sign In
          </button>
          {message && <p style={{ marginTop: "10px", color: "#01579B" }}>{message}</p>}
          <button
            type="button"
            style={switchButtonStyle}
            onClick={() => setIsRegister(true)}
          >
            Not registered? Register
          </button>
        </form>
      )}

      {/* Register Form */}
      {isRegister && (
        <form style={formStyle} onSubmit={handleRegisterSubmit}>
          <h3 style={{ marginBottom: "20px", color: "#01579B" }}>Register</h3>
          <input
            style={inputStyle}
            type="text"
            placeholder="Full Name"
            value={registerData.name}
            onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
            required
          />
          <input
            style={inputStyle}
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            required
          />
          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            required
          />
          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
          {message && <p style={{ marginTop: "12px", color: "#01579B" }}>{message}</p>}
          <button
            type="button"
            style={switchButtonStyle}
            onClick={() => setIsRegister(false)}
          >
            Already registered? Login
          </button>
        </form>
      )}
    </section>
  );
}
