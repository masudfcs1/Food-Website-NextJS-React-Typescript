import { AiOutlineMenu } from "react-icons/ai";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="container pt-6">
      <div className="flex items-center justify-between">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <ul className="hidden md:flex gap-6 font-semibold text-[15px] items-center ">
          <li className=" cursor-pointer hover:text-xl transition-all">Home</li>
          <li className=" cursor-pointer hover:text-xl transition-all">Food</li>
          <li className=" cursor-pointer hover:text-xl transition-all">Dish</li>
          <li className=" cursor-pointer hover:text-xl transition-all">
            About
          </li>
          <li className=" cursor-pointer hover:text-xl transition-all">
            Contact
          </li>
          <button className=" px-6 py-3 bg-green-500 hover:bg-green-600 rounded-3xl">
            {" "}
            Signup{" "}
          </button>
        </ul>
        <AiOutlineMenu
          className="md:hidden hover:cursor-pointer text-green-500 "
          size={25}
        />
      </div>
    </div>
  );
}
