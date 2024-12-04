import React from "react";
import Navbar from "./components/Home/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProducPage from "./pages/ProducPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Routes for different pages */}
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/product/:id" element={<ProducPage />} />{" "}
        {/* Product details page */}
        {/* Other routes */}
        <Route path="/Promotional" element={<div>Promotional Page</div>} />
        <Route path="/Clothing" element={<div>Clothing Page</div>} />
        <Route path="/Headwear" element={<div>Headwear Page</div>} />
        <Route path="/ReturnGifts" element={<div>Return Gifts Page</div>} />
        <Route path="/production" element={<div>Production Page</div>} />
        <Route path="/Sale" element={<div>Sale Page</div>} />
        <Route path="/Australia" element={<div>Australia Page</div>} />
      </Routes>
    </div>
  );
};

export default App;
