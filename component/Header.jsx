import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
function Header() {
  return (
    <div className="header bg-indigo-200 flex justify-between items-center px-4 h-12">
      <div className="left">
        <div className=" text-2xl text-indigo-800">
          Golu Bhatt With TailWind
        </div>
      </div>
      <div className="middle">
        <ul className="hidden md:flex gap-4">
          <li className="font-medium">Home</li>
          <li className="font-medium">About Us</li>
          <li className="font-medium">Contact</li>
        </ul>
      </div>
      <div className="end">
        <div className="hidden md:block bg-blue-600 px-4 py-2 rounded-md font-bold">
          Login/Signup
        </div>
        <div className="block md:hidden ">
          <IoReorderThreeOutline />
        </div>
      </div>
    </div>
  );
}

export default Header;
