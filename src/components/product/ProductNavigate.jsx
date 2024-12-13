import React from 'react'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

const ProductNavigate = () => {
  return (
    <div className='Mycontainer'>
      <div className="flex flex-wrap items-center gap-5 text-smallHeader mt-8 text-lg">
        <Link to={"/"} className="flex items-center gap-3">
          <p>Home</p>
          <MdKeyboardArrowRight className="text-xl" />
        </Link>
        <Link to={"/category"} className="flex items-center gap-3">
          <p>Category</p>
          <MdKeyboardArrowRight className="text-xl" />
        </Link>
        <Link to={"/shop"} className="flex items-center gap-3">
          <p>Shop</p>
          <MdKeyboardArrowRight className="text-xl" />
        </Link>
        <p>Product</p>
      </div>
    </div>
  );
}

export default ProductNavigate