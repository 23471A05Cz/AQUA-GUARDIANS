import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AuthPage from './AuthPage';
import About from './About';
import Contact from './Contact';
import WaterQuality from './WaterQuality';
import Quiz from './Quiz';
import Filtaration from './Filtaration';
import QualityChecker from './QualityChecker';
import Ourmission  from './Ourmission';

import './Header.css';

function Header() {
  return (
    <div
      className="main-background"
      style={{
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: "'Poppins', sans-serif",
        color: 'white',
      }}
    >
      <header className="navbar">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDx6Ld8b6-sn6h6JIdNYgClBA6Rj1VpQd4EQ&s"
            alt="water icon"
          />
          <h4 style={{ color: 'blue' }}>AquaGuardians</h4>
        </div>

        <nav className="nav-center">
          <NavLink to="/home" className={({ isActive }) => (isActive ? 'active-link' : '')}><br></br>Home</NavLink>
           <NavLink to="/auth" className={({ isActive }) => (isActive ? 'active-link' : '')}><br></br>AuthPage</NavLink>
          <NavLink to="/waterquality" className={({ isActive }) => (isActive ? 'active-link' : '')}><br></br>Water Quality</NavLink>
          <NavLink to="/qualitychecker" className={({ isActive }) => (isActive ? 'active-link' : '')}><br></br>Quality Checker</NavLink>
          <NavLink to="/filtaration" className={({ isActive }) => (isActive ? 'active-link' : '')}><br></br>Filtration</NavLink>
          <NavLink to="/Ourmission" className={({ isActive }) => (isActive ? 'active-link' : '')}><br></br>Our Mission</NavLink>
          
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}><br></br>About</NavLink>
           <NavLink to="/quiz" className={({ isActive }) => (isActive ? 'active-link' : '')}><br></br>Quiz</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}><br></br>Contact Us</NavLink>
        </nav>
      </header>

      <div className="content-overlay">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/waterquality" element={<WaterQuality />} />
           <Route path="/qualitychecker" element={<QualityChecker />} />
          <Route path="/filtaration" element={<Filtaration />} />
          <Route path="/Ourmission" element={<Ourmission />} />
          <Route path="/about" element={<About />} />
           <Route path="/quiz" element={<Quiz />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default Header;
