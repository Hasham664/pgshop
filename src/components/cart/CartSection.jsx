import React from "react";
import pic from "../../assets/sale2.png";
import { Link } from "react-router-dom";
const CartSection = () => {
  return (
    <div className=" Mycontainer  grid lg:grid-cols-[70%_30%] grid-cols-1 gap-3 items-start  py-10">
      <div className="  p-6">
        <h1 className="text-2xl font-semibold mb-6">Shopping Card</h1>
        <div className="overflow-x-auto">
          <table className="">
            <thead>
              <tr className="w-full bg-activeFilter text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 text-sm px-6 font-normal text-left">
                  Products
                </th>
                <th className="py-3 px-6 text-left font-normal">
                  Logo Updates
                </th>
                <th className="py-3 px-0 lg:px-6 text-center font-normal">
                  Price
                </th>
                <th className="py-3 px-6 text-center font-normal">Quantity</th>
                <th className="py-3 px-6 text-center font-normal">Sub-total</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <img
                      src={pic}
                      alt="Blue Shirt"
                      className="w-10 h-10 mr-4"
                    />
                    <span>Shirt Design Printing</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-gray-200 px-2 py-3 rounded">
                    <img
                      src="/drag.png"
                      alt=""
                      className="w-[60%] flex m-auto text-black"
                    />
                  </button>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className="line-through text-gray-400">$99</span> $70
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex border px-4 py-2 justify-center items-center">
                    <button className="">-</button>
                    <input
                      type="text"
                      value="03"
                      className="w-12 text-center mx-2  "
                    />
                    <button className="">+</button>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">$70</td>
              </tr>
              <tr className="border-b border-gray-200 ">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <img
                      src={pic}
                      alt="Yellow Shirt"
                      className="w-10 h-10 mr-4"
                    />
                    <span>Shirt Design Printing</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-gray-200 px-2 py-3 rounded">
                    <img
                      src="/drag.png"
                      alt=""
                      className="w-[60%] flex m-auto text-black"
                    />
                  </button>
                </td>
                <td className="py-3 px-6 text-center">$250</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex border px-4 py-2 justify-center items-center">
                    <button className="">-</button>
                    <input
                      type="text"
                      value="03"
                      className="w-12 text-center mx-2  "
                    />
                    <button className="">+</button>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">$250</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-6">
          <Link
            to={"/shop"}
            className="flex items-center text-pink-500 border border-pink-500 px-4 py-2 rounded"
          >
            RETURN TO SHOP
          </Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            UPDATE CART
          </button>
        </div>
      </div>
      <div className=" bg-white shadow-md rounded-lg p-6 mt-10">
        <h2 className="text-xl font-semibold mb-6">Card Totals</h2>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span>Sub-total</span>
            <span>$320</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Discount</span>
            <span>$24</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Tax</span>
            <span>$61.99</span>
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter promo code"
            className="w-full border border-gray-300 p-2 rounded mb-2"
          />
          <button className="w-full bg-pink-500 text-white py-3 rounded">
            APPLY COUPON
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">$357.99 USD</span>
          <span>Total</span>
        </div>
        <Link to={'/checkout'} className="w-full bg-smallHeader text-white py-3 rounded flex items-center justify-center">
          PROCEED TO CHECKOUT <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default CartSection;
