import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className=" w-full px-[12%] py-10 scroll-mt-20">
      <h4 className=" text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className=" text-center text-5xl font-Ovo">My services </h2>

      <p className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a frontend developer from Brussels, Belgium with 3 years of
        experience in multiple companies like ..... , .....
      </p>

      <div className="grid grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
            key={index}
          >
            <Image src={icon} alt="" className="w-10"></Image>
            <h3 className=" text-lg my-4 text-gray-700">{title}</h3>
            <p className=" text-sm text-gray-600 leading-5">{description}</p>
            <a className="flex items-center gap-2 text-sm mt-5" href={link}>
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4"></Image>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
