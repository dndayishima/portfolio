"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"));
const HeroOne = dynamic(() => import("./components/HeroOne"));
const AboutUs = dynamic(() => import("./components/AboutUs"));
const Services = dynamic(() => import("./components/Service"));
const CTABanner = dynamic(() => import("./components/CTABanner"));
const Experience = dynamic(() => import("./components/Experience"));
const GetInTouch = dynamic(() => import("./components/GetInTouch"));
const Switcher = dynamic(() => import("./components/Switcher"));

export default function Index() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.classList.add("light");
    }
  }, []);
  return (
    <>
      <Navbar />
      <HeroOne />
      <AboutUs />
      <Services />
      <CTABanner />
      <Experience />
        {/*<Projects />*/}
      <GetInTouch />
      {/*<Footer />*/}
      <Switcher />
    </>
  );
}
