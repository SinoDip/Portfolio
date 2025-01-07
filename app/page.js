"use client";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Work></Work>
    </>
  );
}
