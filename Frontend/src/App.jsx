// GOOGLE PHOTOS API KEY 
// AIzaSyDDvvR2LuW3ESOH6_oRj9Vuuo2fpyTCXU4

import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Feedback from './Components/Feedback';
import FeedbackList from './Components/fl';
function App() {
  return (
    <>
    <div className="App">
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
            <Hero />
            <Services />
            <About />
            <FeedbackList/> 
            <Feedback />

      </div>
    </>
  )
}

export default App
