import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Subheader = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-[70vh] flex flex-col items-center justify-center gap-4">
      <motion.div
        className=""
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Image src={assets.hand_icon} alt=""></Image>
      </motion.div>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className=" text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Welcome to my app portfolio.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className=" max-w-2xl mx-auto font-Ovo"
      >
        Here u will find some of my projects
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className=" px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className=" w-4"></Image>
        </motion.a>
        <motion.a
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className=" px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My resume
          <Image src={assets.download_icon} alt="" className=" w-4"></Image>
        </motion.a>
      </div>
    </div>
  );
};

export default Subheader;
