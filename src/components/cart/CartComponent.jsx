import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const parsePrice = (priceString) => {
  const priceMatch = priceString.match(/\$([0-9.]+)/);
  return priceMatch ? parseFloat(priceMatch[1]) : 0;
};

const CartComponent = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const { items } = useSelector((state) => state.cart);

  const totalAmount = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  const [uploadedImage, setUploadedImage] = useState("/drag.png");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("Current value:", e.target.value);
  };
  return (
    <div className="Mycontainer flex md:flex-wrap lg:flex-nowrap flex-wrap justify-between gap-4   ">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">Shopping Card</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="flex flex-col lg:table-header-group md:table-header-group sm:table-header-group">
              <tr className="bg-activeFilter flex lg:table-row md:table-row sm:table-row">
                <th className="p-3 text-xs text-left lg:pl-20 md:pl-20 pl-4 font-medium flex-1  lg:table-cell">
                  PRODUCTS
                </th>
                <th className="p-3 text-xs font-medium flex-1  lg:table-cell">
                  LOGO UPDATE
                </th>
                <th className="p-3 text-xs font-medium flex-1 lg:table-cell">
                  PRICE
                </th>
                <th className="p-3 text-xs font-medium flex-1  lg:table-cell">
                  QUANTITY
                </th>
                <th className="p-3 text-xs font-medium flex-1   lg:table-cell">
                  SUB-TOTAL
                </th>
              </tr>
            </thead>

            <tbody className="flex flex-col lg:table-header-group md:table-header-group sm:table-header-group">
              {items.map((item) => {
                const currentPrice = parsePrice(item.price);
                const subTotal = currentPrice * item.quantity;

                return (
                  <tr key={item.id} className="">
                    <td className="p-3 flex items-center  space-x-3">
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className=" border border-category rounded-[50%] p-1 text-lg"
                      >
                        <IoClose className="text-category" />
                      </button>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 "
                      />
                      <div>
                        <p className="font-semibold lg:text-sm md:text-sm text-xs">
                          {item.name}
                        </p>
                      </div>
                    </td>

                    <td className="p-3 text-center">
                      <div
                        onClick={handleImageClick}
                        className="cursor-pointer"
                      >
                        <img
                          src={uploadedImage}
                          alt="Upload"
                          className="flex m-auto lg:p-4 md:p-4 p-2 lg:w-16 md:w-16 lg:h-16 md:h-16 h-10 w-10 bg-drag"
                        />
                      </div>

                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </td>

                    <td className="p-3">
                      <div>
                        <p className="font-semibold text-center ">
                          ${currentPrice}
                        </p>
                      </div>
                    </td>

                    <td className="p-3">
                      <div className="flex w-20  lg:w-28 md:w-28 m-auto justify-center gap-3 lg:gap-4 md:gap-4  bg-line border border-border2 items-center py-2.5 ">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className=""
                        >
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className=""
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </td>

                    <td className="p-3 text-center font-semibold">
                      ${subTotal.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-between items-center mt-8">
          <Link
            to={"/shop"}
            className="flex items-center px-6 justify-center gap-2 py-3.5 text-heading border-4 border-heading "
          >
            <IoArrowBack className="text-xl" />
            <button className="text-sm font-bold"> RETURN TO SHOP</button>
          </Link>
          <button className=" text-sm border-4 font-bold text-smallHeader border-smallHeader px-6 py-4 rounded hover:bg-gray-100">
            UPDATE CART
          </button>
        </div>
      </div>

      {/* Cart Totals */}
      <div className="mt-10 max-w-96 w-full">
        <div className="border p-6   bg-white">
          <h3 className="text-lg text-brand font-medium pb-2 mb-4 border-b-4 ">
            Card Totals
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-stock text-sm font-normal">Sub-total:</span>
              <span className="text-brand text-sm font-medium">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stock text-sm font-normal">Shipping:</span>
              <span className="text-brand text-sm font-medium">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stock text-sm font-normal">Discount:</span>
              <span className="text-brand text-sm font-medium">$24</span>
            </div>
            <div className="flex justify-between pb-2 ">
              <span className="text-stock text-sm font-normal">Tax:</span>
              <span className="text-brand text-sm font-medium">$61.99</span>
            </div>
            <hr />
          </div>
          <div>
            <input
              type="text"
              value={value}
              placeholder="Enter promo code"
              className="w-full border p-3 outline-none mt-4"
              onChange={handleChange}
            />
            <button className="w-full bg-pink text-white py-4 text-sm font-bold mt-4">
              APPLY COUPON
            </button>
          </div>
          <div className="flex  justify-between font-bold text-lg mt-8">
            <span className="text-brand font-semibold">
              ${totalAmount}
            </span>
            <span className="text-brand font-normal">Total:</span>
          </div>
          <Link
            to={"/checkout"}
            className="w-full flex gap-2 items-center justify-center bg-smallHeader text-white py-4 mt-8"
          >
            <button className="">PROCEED TO CHECKOUT</button>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
