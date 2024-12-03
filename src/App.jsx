import React from 'react'
import Navbar from './components/Home/Navbar'
import { Routes, Route } from "react-router-dom";
import Hero from './components/Home/Hero';
import Home from './components/Home/Home';
import LatestDeals from './components/Home/LatestDeals';


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        {/* dropDown  */}
        <Route path="/Promotional" element="" />
        <Route path="/Clothing" element="" />
        <Route path="/Headwear" element="" />
        <Route path="/ReturnGifts" element="" />
        <Route path="/production" element="" />
        <Route path="/Sale" element="" />
        <Route path="/Australia" element="" />
        {/* dropDown  */}
      </Routes>
      <Home />
    </div>
  );
}

export default App