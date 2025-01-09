"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Mainweb from "../components/comp_UI/Mainweb";
import Subheader from "../components/comp_UI/Subheader";
import { useEffect, useState } from "react";

export default function Webdesign() {
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
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
      <Subheader isDarkMode={isDarkMode}></Subheader>
      <Mainweb isDarkMode={isDarkMode}></Mainweb>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
