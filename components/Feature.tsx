import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import imgg1 from "../public/grid__1.png";
export default function Feature() {
  return (
    <div className=" container pt-20">
      <h2 className=" text-6xl font-bold ">Our</h2>
      <h2 className=" text-6xl font-bold pt-2">
        Feature <span className=" text-green-500">Food</span>
      </h2>
      <p className=" max-w-[550px] pt-5 text-gray-700 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi non
        quos dicta quisquam fuga quae laudantium debitis doloremque quidem
        deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
        a!
      </p>

      <Dash />

      <div className=" grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-5">
        {/* 1st image */}
        <div className=" w-fit mx-auto self-end">
          <Image
            alt="img"
            src="/grid__1.png"
            className=" w-[100%] rounded-xl max-w-[400px] sm:max-w-full h-auto shadow-2xl "
            width={300}
            height={600}
          />
          {/* <Image src={imgg1} alt="grid image" width={300} height={600} /> */}

          <div className=" space-y-4">
            <Dash />
            <h2 className=" font-medium text-xl">Vegetable Salad</h2>
            <p className=" text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae, illo!
            </p>
          </div>
        </div>

        {/* 2nd image */}
        <div className=" w-fit mx-auto ">
          <Image
            alt="img"
            src="/grid__2.png"
            className=" w-[100%] rounded-xl max-w-[400px] sm:max-w-full h-auto shadow-2xl "
            width={500}
            height={900}
          />
          {/* <Image src={imgg1} alt="grid image" width={300} height={600} /> */}

          <div className=" space-y-4">
            <Dash />
            <h2 className=" font-medium text-xl">Baked apples</h2>
            <p className=" text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae, illo!
            </p>
          </div>
        </div>

        {/* 3rd image */}
        <div className=" w-fit mx-auto self-end">
          <Image
            alt="img"
            src="/grid__1.png"
            className=" w-[100%] rounded-xl max-w-[400px] sm:max-w-full h-auto shadow-2xl "
            width={300}
            height={600}
          />
          {/* <Image src={imgg1} alt="grid image" width={300} height={600} /> */}

          <div className=" space-y-4">
            <Dash />
            <h2 className=" font-medium text-xl">Cherries chicken</h2>
            <p className=" text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae, illo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
