import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "/cake.avif",
    title: "Delicious Cake",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
];

export default function Menu() {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-green-500">Menu</span>
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          <br />
          quidem esse eum animi?
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <ul className=" mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className=" text-white bg-green-500 p-1">Appetizers</li>
        <li>Breakfast</li>
        <li>Salads</li>
        <li>Meat & Fish</li>
        <li> Soup</li>
        <li>Desert</li>
        <li>Drinks</li>
      </ul>

      <div className=" grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className=" w-fit mx-auto">
          <Image
            className=" w-[100%] max-w-[400px] h-auto "
            alt="dish"
            src="/menu_left.png"
            width={500}
            height={500}
          />
        </div>
        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4 ">
          {menuData.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
