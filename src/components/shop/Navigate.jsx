import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navigate = () => {
  return (
    <div className="Mycontainer">
      <div className="flex items-center gap-5 text-smallHeader mt-8 text-lg">
        <Link to={"/"} className="flex items-center gap-3">
          <p>Home</p>
          <MdKeyboardArrowRight className="text-xl" />
        </Link>
        <Link to={"/category"} className="flex items-center gap-3">
          <p>Category</p>
          <MdKeyboardArrowRight className="text-xl" />
        </Link>
        <p>Shop</p>
      </div>
    </div>
  );
}

export default Navigate