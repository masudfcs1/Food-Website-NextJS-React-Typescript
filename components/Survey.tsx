import Image from "next/image";
import React from "react";

const Survey = () => {
  return (
    <div className=" container pt-[400px]">
      <div className=" grid grid-cols-[60%,1fr] gap-20">
        <div>
          <Image
            src="/survey.png"
            className=" w-[100%] h-auto lg:w-auto lg:h-[90vh] "
            width={1000}
            height={300}
            alt="survey image"
          />
        </div>

        <div className=" self-center">
          <h2 className=" text-3xl md:text-6xl font-bold ">Survey</h2>
          <h2 className=" text-3xl md:text-6xl font-bold pt-3 ">
            About our <span className=" text-green-500">Food</span>
          </h2>
          <p className=" text-gray-700  pt-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p className=" text-gray-700  pt-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
