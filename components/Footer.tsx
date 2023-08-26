import { BsPinterest } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import React from "react";

const Footer = () => {
  return (
    <div className=" pt-[400px] container">
      <div className=" grid lg: md:grid-cols-3 grid-cols-3 gap-10">
        <div className=" space-x-4">
          <h2 className=" font-bold text-xl">About Us</h2>
          <p className=" leading-[1.8] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, harum?Lorem ipsum dolor
          </p>
        </div>
        {/* -------- */}

        <div className=" space-x-4">
          <h2 className="  text-xl font-bold">The Restaurant</h2>
          <ul className=" space-y-2">
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* ...... */}

        <div>
          <h2 className=" font-bold text-xl">Social </h2>
          <div className="flex gap-7 text-green-500 text-2xl pt-7  ">
            <BsFacebook className="hover:text-green-400 cursor-pointer text-6xl lg:text-3xl" />
            <BsTwitter className="hover:text-green-400 cursor-pointer text-6xl lg:text-3xl " />
            <BsLinkedin className="hover:text-green-400 cursor-pointer text-6xl lg:text-3xl" />
            <BsPinterest className="hover:text-green-400 cursor-pointer text-6xl lg:text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
