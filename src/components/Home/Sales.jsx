import React from "react";
import image1 from "../../assets/sale1.png";
import image2 from "../../assets/sale2.png";
import image3 from "../../assets/sale3.png";
import image4 from "../../assets/sale4.png";
import image5 from "../../assets/sale5.png";
import image6 from "../../assets/sale6.png";

const Sale = () => {
  const categories = [
    {
      title: "Flash Sale Today",
      products: [
        { name: "Hills Hest", price: "$1,500", image: image1 },
        { name: "Sydney Super Star", price: "$1,500", image: image2 },
        { name: "Indigenous", price: "$1,500", image: image3 },
      ],
    },
    {
      title: "Top Sellers",
      products: [
        { name: "Sydney Premier League", price: "$1,500", image: image4 },
        { name: "Axani", price: "$1,500", image: image5 },
        { name: "Hills Hest", price: "$1,500", image: image6 },
      ],
    },
    {
      title: "Top Rated",
      products: [
        { name: "Sydney Super Star", price: "$1,500", image: image1 },
        { name: "Sydney Premier League", price: "$1,500", image: image2 },
        { name: "Axani", price: "$1,500", image: image3 },
      ],
    },
    {
      title: "New Arrival",
      products: [
        { name: "Sydney Premier League", price: "$1,500", image: image4 },
        { name: "Sydney Super Star", price: "$1,500", image: image5 },
        { name: "Hills Hest", price: "$1,500", image: image6 },
      ],
    },
  ];

  return (
    <div className="Mycontainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  pt-8	">
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="w-full mb-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold">{category.title}</h3>
            <button className="text-base text-smallHeader border-b-2 border-smallHeader font-semibold">
              VIEW ALL
            </button>
          </div>
          {/* Products Grid */}
          <div className="  ">
            {category.products.map((product, i) => (
              <div
                key={i}
                className="border flex gap-3 rounded-md p-4  items-center mb-4"
              >
                <img src={product.image} alt={product.name} className="mb-2" />

                <div>
                  <p className="font-normal text-brand">{product.name}</p>
                  <p className=" text-smallHeader font-semibold">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sale;
