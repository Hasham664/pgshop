import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
  applyFilters,
} from "../../redux/slices/filterSlice";

const PriceFilter = () => {
  const dispatch = useDispatch();
  const { minPrice, maxPrice } = useSelector((state) => state.filters);

  const handlePriceChange = (min, max) => {
    dispatch(setMinPrice(min));
    dispatch(setMaxPrice(max));
    dispatch(applyFilters());
  };

  const priceRanges = [
    { label: "All Prices", min: 0, max: 1000 },
    { label: "Under $20", min: 0, max: 20 },
    { label: "$25 to $100", min: 25, max: 100 },
    { label: "$100 to $300", min: 100, max: 300 },
    { label: "$300 to $500", min: 300, max: 500 },
    { label: "$500 to $1,000", min: 500, max: 1000 },
    { label: "$1,000 to $10,000", min: 1000, max: 10000 },
  ];

  return (
    <>
      <h1 className="font-medium text-base text-brand mb-2 uppercase">
        Price Range
      </h1>
      <div className="flex flex-col gap-4 mt-4 border-b-2 pb-6">
        <div className="flex flex-col">
          <span>${minPrice}</span>
          <input
            type="range"
            min="0"
            max="1000"
            value={minPrice}
            onChange={(e) =>
              handlePriceChange(Number(e.target.value), maxPrice)
            }
            className=""
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) =>
              handlePriceChange(minPrice, Number(e.target.value))
            }
            className=""
          />
          <span>${maxPrice}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <button className="w-full text-start px-3 text-sm border rounded text-minPrice  border-border py-3">
            Min price
          </button>
          <button className="w-full text-start px-3 text-minPrice  rounded text-sm border border-border py-3">
            Max price
          </button>
        </div>
        <div className="flex flex-col  gap-2">
          {priceRanges.map((range, index) => (
            <label key={index} className="flex items-center gap-2 mt-2">
              <div
                className={` w-6 h-6 flex justify-center items-center rounded-full ${
                  minPrice === range.min && maxPrice === range.max
                    ? "bg-smallHeader text-white"
                    : "border-2 border-smallHeader border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="priceFilter"
                  checked={minPrice === range.min && maxPrice === range.max}
                  onChange={() => handlePriceChange(range.min, range.max)}
                  className="hidden"
                />
                {minPrice === range.min && maxPrice === range.max && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              {range.label}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default PriceFilter;
