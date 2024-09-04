import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import './Navbar.css'
import Login from './Login';
import Signup from './Signup';
const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleRegisterClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    navigate('../');
    setIsLoggedIn(false);
  };
  return (
    <>
    <nav className="navbar">
            <div className="logo">Techy Software</div>
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#feedback-container">Reviews</a></li>
                <li><a href="#feedback">Contact Us</a></li>
                
            </ul>
            <div className="auth-buttons">
                {isLoggedIn ? (
                    <button className="login-btn" onClick={handleLogoutClick}>Log Out</button>
                ):(
                    <>
                    <button className="login-btn" onClick={handleLoginClick}>Login</button>
                    <button className="signup-btn" onClick={handleRegisterClick}>Signup</button>
                    </>
                )
                }
            </div>
        </nav>
        <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      </Routes> 
    </>
  )
}

export default Navbar
