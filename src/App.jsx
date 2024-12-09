import React from "react";
import Navbar from "./components/Home/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import ProducPage from "./pages/ProducPage";
import Footer from "./components/Home/Footer";
import CategoryPage from "./pages/CategoryPage";
import ShopPage from "./pages/ShopPage";

const App = () => {

  return (
    <div>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
        {/* SHOPPAGE  */}
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/shop" element={ <ShopPage/> } />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
