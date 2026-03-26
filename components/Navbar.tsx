"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 text-gray-700 
      ${
        scrolled
          ? "bg-white/10 backdrop-blur-md shadow-sm"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between text-gray-700 px-10 py-1.5">

        {/* Logo */}
        <Image
          src="/macwin-logo.png"
          alt="Macwin Infotech"
          width={95}
          height={28}
        />

        {/* Navigation */}
        <div className="flex items-center gap-7 text-[14px] text-gray-700">
          <a href="#hero" className="hover:text-gray-900 transition">Home</a>
          <a href="#services" className="hover:text-gray-900 transition">Services</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}