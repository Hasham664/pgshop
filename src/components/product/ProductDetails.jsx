import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Extract the product ID from the URL
  // You can fetch the product details using this ID if needed.

  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Fetch and display product details here */}
    </div>
  );
};

export default ProductDetails;
