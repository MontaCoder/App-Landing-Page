import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className=" flex md:flex-row  flex-col gap-4 justify-between items-center text-lg ">
      <div className="flex md:flex-row flex-col items-center md:gap-8">
        <div className="flex items-center gap-2">
          <Image width={40} height={40} src="Frame.svg" alt="Image" />
          <div className=" flex items-center">
            {" "}
            <span className="font-bold  text-3xl cursor-pointer">uifry</span>
            <span className="text-[8px]">TM</span>
          </div>
        </div>
        <ul className="flex items-center gap-4 font-medium cursor-pointer">
          <li className="hover:font-bold hover:text-red-500">Home</li>
          <li className="hover:font-bold hover:text-red-500">About us</li>
          <li className="hover:font-bold hover:text-red-500">Pricing</li>
          <li className="hover:font-bold hover:text-red-500">Features</li>
        </ul>
      </div>
      <div>
        <button className="bg-black text-white px-10 rounded-sm hover:bg-slate-800  py-3">
          Download
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
