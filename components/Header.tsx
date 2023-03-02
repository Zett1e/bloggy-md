import Image from "next/image";
import React from "react";
import logo from "../public/images/Bloggy_Logo.png";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <div className="bg-[#ffd819]">
      <div className="py-3 px-5 md:px-10 flex justify-between items-center">
        <div className="w-24 md:w-32">
          <Image className="w-full" src={logo} alt="Logo" />
        </div>
        <Navbar/>
      </div>
    </div>
  );
};

export default Header;
