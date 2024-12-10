import React, { useEffect, useState } from "react";
import collection1 from "../../assets/collection1.png";
import collection2 from "../../assets/collection2.png";
import collection3 from "../../assets/collection3.png";
import collection4 from "../../assets/collection4.png";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

  const tabData = [
    { id: 1, pic: collection1, description: "Holiday Gift Guide" },
    { id: 2, pic: collection2, description: "Alpha Pens" },
    { id: 3, pic: collection3, description: "Full Color" },
    { id: 4, pic: collection4, description: "Design Wrap" },
    { id: 5, pic: collection1, description: "Gift Box" },
    { id: 6, pic: collection2, description: "Travel Kit" },
    { id: 7, pic: collection3, description: "Personalized Mug" },
    { id: 8, pic: collection4, description: "Notebook" },
    { id: 9, pic: collection1, description: "Bookmarks" },
    { id: 10, pic: collection2, description: "Alpha Pens" },
    { id: 11, pic: collection3, description: "Full Color" },
    { id: 12, pic: collection4, description: "Design Wrap" },
    { id: 13, pic: collection1, description: "Bookmarks" },
    { id: 14, pic: collection2, description: "Alpha Pens" },
    { id: 15, pic: collection3, description: "Full Color" },
    { id: 16, pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },

    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },

    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },

    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
    { pic: collection1, description: "Bookmarks" },
    { pic: collection2, description: "Alpha Pens" },
    { pic: collection3, description: "Full Color" },
    { pic: collection4, description: "Design Wrap" },
  ];
const Category = () => {


  const [currentPage, setCurrentPage] = useState(1);
    const [maxVisiblePages, setMaxVisiblePages] = useState(6);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(tabData.length / itemsPerPage);
  const currentItems = tabData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setMaxVisiblePages(4); 
      } else {
        setMaxVisiblePages(6); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
  const navigate = useNavigate();

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="Mycontainer">
      <div className="flex items-center gap-5 text-smallHeader mt-8 text-lg">
        <Link to={"/"} className="flex items-center gap-3">
          <p>Home</p>
          <MdKeyboardArrowRight className="text-xl" />
        </Link>
        <p>Category</p>
      </div>

      <div>
        <h1 className="text-brand text-5xl pt-16 font-semibold">
          Custom Shirts & Tops
        </h1>
        <p className="text-brand text-xl pt-6 font-normal ">
          Easy styling for every day of the week. Personalize your favorite
          wear-everywhere styles, like polos, tees, and more. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-14">
        {currentItems.map((product, index) => (
          <div key={index} className="p-6 border rounded shadow-sm text-center">
            <img
              key={product.id}
              onClick={() => handleViewProduct(product.id)}
              src={product.pic}
              alt={product.description}
              className="w-full mb-3"
            />
            <p className="text-lg font-medium">{product.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-16 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="lg:mx-4 md:mx-4 sm:mx-4 mx-1 w-10 h-10  border-2 px-2 border-smallHeader rounded-[100%] hover:bg-gray-200 "
        >
          <IoMdArrowBack className="text-xl lg:text-2xl md:text-2xl sm:text-2xl text-smallHeader" />
        </button>
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 mx-1 border rounded-[100%] ${
              currentPage === page
                ? "bg-smallHeader text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}  
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="lg:mx-4 md:mx-4 w-10 h-10  sm:mx-4 mx-1 border-2 px-2 border-smallHeader rounded-[100%] hover:bg-gray-200 "
        >
          <IoMdArrowForward className="text-xl lg:text-2xl md:text-2xl sm:text-2xl text-smallHeader" />
        </button>
      </div>
    </div>
  );
};

export default Category;