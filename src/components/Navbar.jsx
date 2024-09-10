import React from "react";
import { CircleUserRound, MapPin } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-2 py-2 border border-b-2 shadow-md sticky">
      <div className="flex flex-row">
        <div className="flex flex-row justify-center items-center pr-2">
          <CircleUserRound
            size={35}
            className="bg-red-600 text-white rounded-3xl"
          />
        </div>
        <div className="flex flex-col">
          <h1>
            Welcome, Guest{" "}
            <span className="text-red-600 font-semibold">(Login)</span>
          </h1>
          <h1 className="flex flex-row items-center">
            <MapPin size={18} /> Deliver to 400071 <IoMdArrowDropdown />
          </h1>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2">
      <Search />
      <img src="/logo.jpg" alt="" width={50} />
      </div>
    </div>
  );
};

export default Navbar;
