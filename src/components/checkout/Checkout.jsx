import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { FaDollarSign } from "react-icons/fa6";
import { BiLogoVenmo } from "react-icons/bi";
import { FaPaypal } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";

const paymentMethods = [
  { id: "cod", label: "Cash on Delivery", icon: <FaDollarSign /> },
  { id: "venmo", label: "Venmo", icon: <BiLogoVenmo /> },
  { id: "paypal", label: "PayPal", icon: <FaPaypal /> },
  { id: "amazon", label: "Amazon Pay", icon: <FaAmazon /> },
  { id: "card", label: "Credit/Debit Card", icon: <GoCreditCard /> },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);

  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      paymentMethod: "card", // Default Payment Method
    },
  });
  const parsePrice = (priceString) => {
    const priceMatch = priceString.match(/\$([0-9.]+)/);
    return priceMatch ? parseFloat(priceMatch[1]) : 0;
  };

  const paymentMethod = watch("paymentMethod");

  const totalAmount = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const discount = 24;
  const tax = 61.99;
  const total = totalAmount + tax - discount;

  const onSubmit = (data) => {
    console.log("Order Details:", data);
    console.log("Items Ordered:", items);
    navigate("/");
  };

  return (
    <div className="Mycontainer  py-8">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full lg:w-[70%] border p-6">
            <h3 className="text-xl font-medium mb-4">Billing Information</h3>
            <div className="grid items-center lg:grid-cols-3 md:grid-cols-3 gap-4">
              <div>
                <p>User name</p>
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", { required: true })}
                  className="border mt-2.5 w-full p-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                  className="border mt-8 w-full p-2"
                />
              </div>
              <div>
                <p>Company Name (Optional)</p>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address", { required: true })}
                  className="border mt-2 p-2 w-full "
                />
              </div>
            </div>
            <div className="mt-4">
              <p>Adress</p>
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
                className="border mt-2 p-2 w-full"
              />
            </div>
            <div className="grid lg:grid-cols-4 md::grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 mt-4">
              {/* Country Dropdown */}
              <div className="flex flex-col">
                <label htmlFor="country" className="text-sm mb-1">
                  Country
                </label>
                <select
                  id="country"
                  {...register("country", { required: true })}
                  className="border p-2"
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                </select>
              </div>

              {/* Region/State Dropdown */}
              <div className="flex flex-col">
                <label htmlFor="region" className="text-sm mb-1">
                  Region/State
                </label>
                <select
                  id="region"
                  {...register("region", { required: true })}
                  className="border p-2"
                >
                  <option value="" disabled>
                    Select Region/State
                  </option>
                  <option value="California">California</option>
                  <option value="Ontario">Ontario</option>
                  <option value="London">London</option>
                </select>
              </div>

              {/* City Dropdown */}
              <div className="flex flex-col">
                <label htmlFor="city" className="text-sm mb-1">
                  City
                </label>
                <select
                  id="city"
                  {...register("city", { required: true })}
                  className="border p-2"
                >
                  <option value="" disabled>
                    Select City
                  </option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Manchester">Manchester</option>
                </select>
              </div>

              {/* Zip Code Input */}
              <div className="flex flex-col">
                <label htmlFor="zip" className="text-sm mb-1">
                  Zip Code
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder="Enter Zip Code"
                  {...register("zip", { required: true })}
                  className="border p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="border p-2 w-full mt-1"
                />
              </div>
              <div>
                <p>Phone Number</p>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone", { required: true })}
                  className="border p-2 w-full mt-1"
                />
              </div>
            </div>
            <div className="border mt-4 rounded">
              <h3 className="text-lg font-medium my-4 px-5 pb-3 border-b">
                Payment Option
              </h3>
              <div className=" px-5 flex-wrap py-5 border-b flex items-center justify-around ">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className="flex text-sm lg:border-r-2 last:border-r-0 px-6 flex-col items-center gap-2 cursor-pointer"
                  >
                    <p className="text-2xl"> {method.icon}</p>
                    <span>{method.label}</span>

                    <Controller
                      name="paymentMethod"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="radio"
                          value={method.id}
                          checked={field.value === method.id}
                          onChange={field.onChange}
                          className=""
                        />
                      )}
                    />
                  </label>
                ))}
              </div>

              {paymentMethod === "card" && (
                <div className="mt-4 pb-8 space-y-4 px-5">
                  <div>
                    <p className="text-brand text-sm">Name on Card</p>
                    <input
                      type="text"
                      placeholder="Name on Card"
                      {...register("cardName")}
                      className="border mt-2 p-2 w-full"
                    />
                  </div>
                  <div>
                    <p className="text-brand text-sm">Card Number</p>
                    <input
                      type="text"
                      placeholder="Card Number"
                      {...register("cardNumber")}
                      className="border mt-2 p-2 w-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-brand text-sm">Expire Date</p>
                      <input
                        type="text"
                        placeholder="Expiry Date"
                        {...register("expireDate")}
                        className="border  mt-2 w-full p-2"
                      />
                    </div>
                    <div>
                      <p className="text-brand text-sm">CVC</p>
                      <input
                        type="text"
                        placeholder="CVC"
                        {...register("cvc")}
                        className="border  mt-2  w-full p-2"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="">
              <p className="pt-10 text-brand text-lg">Additional Information</p>

              <p className="pt-6 text-sm text-brand">
                Order Notes <span className="text-gray-400">(Optional)</span>{" "}
              </p>
              <textarea
                placeholder="Order Notes (Optional)"
                {...register("notes")}
                className="border-2 border-textarea p-2 w-full mt-2 h-24"
              />
            </div>
          </div>

          <div className="w-full h-fit lg:w-[30%] border p-5 bg-line">
            <h3 className="text-xl font-medium mb-4">Order Summary</h3>
            <ul>
              {items.map((item) => (
                <li key={item.id} className="flex justify-between py-2">
                  <div className="flex gap-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 object-cover"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium">
                    ${parsePrice(item.price) * item.quantity}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Sub-total:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount:</span>
                <span>${discount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax:</span>
                <span>${tax}</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              type="submit"
              className="w-full bg-smallHeader text-white py-3 mt-4 font-medium"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
