import { PiTruckFill } from "react-icons/pi";
import { MdOutlineLockOpen } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CgList } from "react-icons/cg";
import { FaBook } from "react-icons/fa";
import { PiGiftBold } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const serviceCards = [
  { icon: <PiTruckFill />, title: "Track Order" },
  { icon: <MdOutlineLockOpen />, title: "Reset Password" },
  { icon: <MdOutlinePayment />, title: "Payment Option" },
  { icon: <FaRegUser />, title: "User & Account" },
  { icon: <CgList />, title: "Wishlist & Compare" },
  { icon: <FaBook />, title: "Shipping & Billing" },
  { icon: <MdOutlinePayment />, title: "Shopping Cart & Wallet" },
  { icon: <PiGiftBold />, title: "Sell on Clicon" },
];

const ContactUs = () => {
  return (
    <>
      <div className="Mycontainer">
        <div className="flex items-center gap-5 text-smallHeader mt-8 text-lg">
          <Link to={"/"} className="flex items-center gap-3">
            <p>Home</p>
            <MdKeyboardArrowRight className="text-xl" />
          </Link>
         
          <p>Contact Us</p>
        </div>
      </div>

      <div className="Mycontainer py-12">
        <h1 className="text-3xl font-bold text-center mb-12">
          What can we assist you with today?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 border-4 border-smallHeader rounded-sm hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="text-2xl text-smallHeader ">{card.icon}</div>
              <span className="font-medium text-base text-brand">
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
