import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { assets } from "@/assets/assets"; // Assuming your images are stored here

const Mainweb = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-[0%] scroll-mt-20  md:pb-[2%]"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className=" mb-2 text-lg font-Ovo"
      >
        My web development projects
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className=" text-5xl font-Ovo sm:mt-[90%] lg:mt-4 border-b-2  dark:border-white pb-5 border-gray-700/20"
      >
        Let's start here :
      </motion.h2>

      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex w-full flex-col lg:flex-row items-center gap-10 my-20 md:gap-20"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-3xl py-5">Project 1</h1>
          <p className="mb-1 max-w-2xl font-Ovo">
            A web application built with modern tools and technologies. It
            features a sleek design and a smooth user experience.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.Platenhoes}
            alt="Project 1"
            className="w-full rounded-3xl"
          />
        </motion.div>
      </motion.div>

      {/* Project 2 (Image and Text Alternate) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex w-full flex-col lg:flex-row-reverse items-center gap-10 my-20 md:gap-20"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-3xl py-5">Project 2</h1>
          <p className="mb-1 max-w-2xl font-Ovo">
            Another web application built with best practices, featuring dynamic
            interactions and responsive design for and desktop.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.Platenhoes}
            alt="Project 2"
            className="w-full rounded-3xl"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Mainweb;
