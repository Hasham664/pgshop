import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import deal1 from "../../../assets/shirt2.png";
import deal2 from "../../../assets/cap2.png";
import deal3 from "../../../assets/deal1.png";
import deal4 from "../../../assets/deal2.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

import {
  CursorIcon,
  TruckIcon,
  HeartIcon,
  CartIcon,
  EyeIcon,
} from "../../Home/Icons";
const products = [
  {
    id: 1,
    img: deal1,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 2,
    img: deal2,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 3,
    img: deal3,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 4,
    img: deal4,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },

];
const Bags = ({ activeTab }) => {
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
    <>
      {activeTab === "Bags" && (
        <div className="Mycontainer pb-24">
          <div className="grid max-default:grid-cols-1 gap-5 lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 ">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleViewProduct(product.id)}
                className="border border-border2 p-4   relative "
              >
                <img src={product.img} alt="" className="w-full" />
                <div className="absolute top-[1.5%] left-[3%]">
                  <p className="bg-heading text-white w-fit px-2 rounded-sm text-xs py-1.5">
                    {product.off}
                  </p>
                  <p className="bg-smallHeader text-white w-fit px-2 rounded-sm text-xs py-1.5 mt-2">
                    {product.hot}
                  </p>
                </div>
                <div className="text-center py-4">
                  <h2 className="text-lg font-bold text-brand pt-1">
                    {product.name}
                  </h2>
                  <p className="font-normal text-brand">{product.code}</p>
                  <h2 className="text-xl text-heading font-semibold pt-4">
                    {product.price}
                  </h2>
                  <p className="text-base font-normal text-brand pt-3">
                    {product.stock}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <p className="text-xl text-smallHeader">{product.icon}</p>
                    <p className="text-base font-semibold text-brand">
                      {product.free}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-xl text-smallHeader">{product.truck}</p>
                    <p className="text-base font-semibold text-brand">
                      {product.delivery}
                    </p>
                  </div>
                </div>
                <div className="flex  gap-1 justify-between mt-10 mb-2">
                  <p className="bg-icons p-3 text-2xl rounded-sm">
                    {product.heart}
                  </p>
                  <div
                    onClick={() => {
                      handleAddToCart(product.id);
                    }}
                    className="flex items-center rounded-sm gap-1 px-2  py-3 bg-smallHeader text-white w-full justify-center cursor-pointer"
                  >
                    <p className="text-xl">{product.cart}</p>
                    <button className="uppercase text-sm">
                      {product.button}
                    </button>
                  </div>
                  <p className="bg-icons p-3 text-2xl rounded-sm">
                    {product.eye}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Bags;
