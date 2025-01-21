"use client";

import React from "react";
import { useParams } from "next/navigation";
import { assets, workData } from "@/assets/assets";
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function WorkDetailPage() {
  const { worksId } = useParams();

  const project = workData.find((project) => project.id === worksId);

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (
      localStorage === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="pt-16 text-center mt-10">
          <h1 className="text-2xl font-bold">Project not found!</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
      <div className="pt-[10%] pb-[10%] container mx-auto  px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Project Image */}
          <div
            className="w-full h-[400px] lg:h-[500px] bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          ></div>

          {/* Right Side: Project Details */}
          <div className="flex flex-col space-y-5">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-lg text-gray-700 dark:text-white">
              {project.detailedDescription}
            </p>
            <p className="text-sm text-gray-500">{project.finished}</p>
            <a
              href={project.link}
              className="text-sm text-blue-800 hover:underline flex items-baseline gap-3 dark:text-blue-300"
              target="_blank"
            >
              {project.linkText}
              <Image
                src={assets.arrow_icon}
                alt=""
                className=" w-3 h-3  "
              ></Image>
            </a>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="flex items-center gap-5 sm:gap-5"
            >
              {project.tools.map((tool, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black mt-5"
                >
                  <Image src={tool} alt={tool} className="w-5 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
