import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import logoNF from "../assets/LightBG.png";
import { Link } from "react-scroll";

export default function Navabar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="font-inter sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 w-full">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <div>
          <img src={logoNF} alt="" className="w-52 cursor-pointer" />
        </div>

        <div className="hidden md:flex">
          <ul className="flex hover:cursor-pointer space-x-8 text-secondaryText font-medium ">
            <li>
              <Link
                to="hero"
                spy={true}
                smooth="easeInOutQuart"
                offset={-100}
                duration={800}
                className="hover:text-highlightedHover transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth="easeInOutQuart"
                offset={-50}
                duration={800}
                className="hover:text-highlightedHover transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="features"
                spy={true}
                smooth="easeInOutQuart"
                offset={-50}
                duration={800}
                className="hover:text-highlightedHover transition-colors duration-200"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                spy={true}
                smooth="easeInOutQuart"
                offset={-50}
                duration={800}
                className="hover:text-highlightedHover transition-colors duration-200"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                spy={true}
                smooth="easeInOutQuart"
                offset={-50}
                duration={800}
                className="hover:text-highlightedHover transition-colors duration-200"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="hidden md:flex text-white font-bold hover:cursor-pointer hover:bg-highlightedHover hover:scale-105 transition-all duration-300 bg-highlightedText px-8 py-3 rounded-2xl ">
            Join Us
          </button>
        </div>

        {/* Mobile View Section */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-primaryText focus:outline-none"
        >
          {isOpen ? (
            <IoMdClose className="w-9 h-9" />
          ) : (
            <MdMenu className="w-9 h-9" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute bg-white top-full left-0 w-full border-b border-gray-200 px-6 py-8 flex flex-col text-center text-lg">
          <ul className="flex flex-col space-y-6 text-secondaryText font-medium ">
            <li>
              <Link
                onClick={toggleMenu}
                to="hero"
                spy={true}
                smooth="easeInOutQuart"
                offset={-100}
                duration={800}
                className="hover:text-highlightedHover transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="about"
                spy={true}
                smooth="easeInOutQuart"
                offset={-50}
                duration={800}
                className="hover:text-highlightedHover transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="features"
                spy={true}
                smooth="easeInOutQuart"
                offset={-50}
                duration={800}
                className="hover:text-highlightedHover transition-colors duration-200"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="pricing"
                spy={true}
                smooth="easeInOutQuart"
                offset={-50}
                duration={800}
                className="hover:text-highlightedHover transition-colors duration-200"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="testimonials"
                spy={true}
                smooth="easeInOutQuart"
                offset={-50}
                duration={800}
                className="hover:text-highlightedHover transition-colors duration-200"
              >
                Reviews
              </Link>
            </li>
          </ul>

          <button className=" mt-6 text-white font-bold hover:cursor-pointer hover:bg-highlightedHover hover:scale-105 transition-all duration-300 bg-highlightedText px-8 py-3 rounded-2xl ">
            Join Us
          </button>
        </div>
      )}
    </nav>
  );
}
