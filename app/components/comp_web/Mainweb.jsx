import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { assets, toolsData } from "@/assets/assets";

const Mainweb = () => {
  // Filter toolsData to only include VSCode and Figma for this page
  const toolsProject1 = toolsData.filter(
    (tool) =>
      tool === assets.vscode ||
      tool === assets.figma ||
      tool === assets.shopify,
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-[0%] scroll-mt-20 md:pb-[2%]"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="mb-2 text-lg font-Ovo"
      >
        My web development projects
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="text-5xl font-Ovo sm:mt-[90%] lg:mt-4 border-b-2 dark:border-white pb-5 border-gray-700/20"
      >
        Let's start here :
      </motion.h2>

      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="flex w-full flex-col lg:flex-row items-center gap-10 my-20 md:gap-20"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-3xl py-5">Meraki-Antwerp:</h1>
          <p className="mb-1 max-w-2xl font-Ovo">
            Meraki-Antwerp.com is an e-commerce website designed for a
            contemporary clothing store in Antwerp. The site combines a stylish,
            minimalist aesthetic with an easy-to-navigate interface, offering a
            smooth shopping experience. With a focus on showcasing the brand’s
            curated collections, the website features high-quality product
            images, streamlined checkout, and responsive design for a seamless
            experience on all devices. The clean, modern design reflects the
            store’s unique fashion sense, while intuitive filtering options make
            browsing the latest trends effortless for customers.
          </p>
          <a
            className="flex items-center gap-2 text-sm mt-5 hover:scale-105 duration-500 hover:font-semibold hover:underline"
            href="https://meraki-antwerp.com/"
            target="_blank"
          >
            Go to live project{" "}
            <Image src={assets.right_arrow} alt="" className="w-4"></Image>
          </a>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          ></motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsProject1.map((tool, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.merakiAntwerp}
            alt="Project 1"
            className="w-full rounded-2xl"
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
            interactions and responsive design for both mobile and desktop.
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
