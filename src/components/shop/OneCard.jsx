import React from "react";
import img from "/shirt.png";
import { CartIcon, ArrowIcon } from "../Home/Icons";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch,  } from "react-redux";
import { useNavigate } from "react-router-dom";


const OneCard = () => {
  const products = [
    {
      id: 1,
      img: img,
      name: "Custom Shirts & Tops1",
      only: "Only for:",
      price: "$299 USD",
      cart: CartIcon,
      button: "Add to cart",
      detail: "View Details",
      icon: ArrowIcon,
    },
    ];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
      const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        console.log(`${product.name} added to cart`);
      };

      const handleViewProduct = (productId) => {
        navigate(`/product/${productId}`);
      };
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="border border-smallHeader rounded-md p-6 mt-8 ">
          <img src={product.img} alt="" className="w-full" />

          <div className="text-center py-4">
            <h2 className="text-lg font-bold text-brand pt-1">
              {product.name}
            </h2>
            <div className="flex items-center gap-2 justify-center">
              <p className="text-sm">{product.only}</p>
              <h2 className="text-base px-3 py-1.5 rounded-sm bg-yellow text-brand font-semibold ">
                {product.price}
              </h2>
            </div>
          </div>

          <div className="flex gap-1 justify-between mt-2 mb-3">
            <div
              onClick={() => {
                handleAddToCart(product.id);
              }}
              className="flex items-center rounded-sm gap-2 px-2 py-3.5 bg-smallHeader text-white w-full justify-center cursor-pointer"
            >
              <p className="text-xl">{product.cart}</p>
              <button className="uppercase text-sm">{product.button}</button>
            </div>
          </div>
          <div
            onClick={() => handleViewProduct(product.id)}
            className="flex items-center rounded-sm gap-2 px-2 py-3.5 border-2  border-smallHeader text-smallHeader w-full justify-center cursor-pointer"
          >
            <button className="uppercase text-sm font-bold">
              {product.button}
            </button>
            <p className="text-xl">{product.icon}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OneCard;
