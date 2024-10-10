import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import ScrollToTop from './components/ScrollToTop';
import TravelPage from './pages/TravelPage';
import AccommodationsInfo from './pages/AccommodationsInfo';

export default function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-bequia" element={<About />} />
        <Route path="/accommodations" element={<Accommodation />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/accommodation-info" element={<AccommodationsInfo />} />

      </Routes>
      <Footer />
    </Router>
  )
}
