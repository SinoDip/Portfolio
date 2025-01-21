import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { webList } from "../../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { assets } from "@/assets/assets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Mainweb = () => {
  // State to manage modal visibility and image slider
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(null); // To store the current project data

  // Function to open modal with images and index
  const openModal = (images, index, project) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setCurrentProject(project); // Save the project data
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to handle clicks outside the modal (background click)
  const handleModalClick = (e) => {
    // If the click is on the background (not on the image), close the modal
    if (e.target.classList.contains("modal-background")) {
      closeModal();
    }
  };

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

      {webList.map((project, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`flex w-full flex-col lg:flex-row ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-10 mb-40 mt-20 md:gap-20`}
          key={index}
        >
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-3xl py-5">{project.title}</h1>
            <p className="mb-1 max-w-2xl font-Ovo">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="flex items-baseline hover:underline hover:underline-offset-1"
            >
              View the live project
              <Image
                src={assets.arrow_icon}
                alt="arrow"
                className="w-3 h-3 ml-3"
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
          </motion.div>

          {/* Image Section - Click to Open Modal/Slider */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-[300px] sm:max-w-[400px] rounded-2xl cursor-pointer" // Smaller image size
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              className="w-full rounded-2xl "
              onClick={() => openModal(project.images, 0, project)} // Open modal with all images and starting index 0
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Modal Slideshow - Shows when modalOpen is true */}
      {modalOpen && (
        <div
          className="modal-background fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70"
          onClick={handleModalClick} // Listen for background click
        >
          <div className="relative w-full max-w-4xl p-5">
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              initialSlide={currentIndex}
              className="swiper-container"
            >
              {currentImages.map((imgSrc, idx) => {
                if (currentProject?.title === "Ember - Publication") {
                  // If it's "Ember", render two images per slide
                  if (idx % 2 === 0) {
                    return (
                      <SwiperSlide key={idx}>
                        <div className="flex">
                          <Image
                            src={currentImages[idx]}
                            alt={`Slide ${idx + 1}`}
                            className="w-1/2 max-h-[80vh] object-contain rounded-xl"
                          />
                          {/* Check if the next image exists before rendering */}
                          {currentImages[idx + 1] && (
                            <Image
                              src={currentImages[idx + 1]}
                              alt={`Slide ${idx + 2}`}
                              className="w-1/2 max-h-[80vh] object-contain rounded-3xl"
                            />
                          )}
                        </div>
                      </SwiperSlide>
                    );
                  }
                  return null; // Skip odd indices
                }

                // For other projects, render one image per slide
                return (
                  <SwiperSlide key={idx}>
                    <Image
                      src={imgSrc}
                      alt={`Slide ${idx + 1}`}
                      className="w-full max-h-[80vh] object-contain rounded-3xl"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Mainweb;
