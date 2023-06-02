import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [Color, setColor] = useState("#1f2937");

  const handleOpen = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "w-full h-[80px] z-10 bg-white fixed drop-shadow-lg"
          : "w-full h-[80px] z-10 bg-white fixed"
      }
      style={{ backgroundColor: `${navBg}` }}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-300 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          <h1 className="text-2xl font-bold cursor-pointer">
            i<span className="text-blue-600 ">Learn</span>{" "}
          </h1>
          {/* MENU ITEMS */}
          <div className="hidden md:flex items-center justify-center">
            <ul style={{ color: `${Color}` }} className="hidden md:flex">
              <a href="/#home">
                <li className="ml-10 text-md  border-b-4 hover:border-blue-600">
                  Home
                </li>
              </a>
              <a href="/#courses">
                <li className="ml-10 text-md  hover:border-b-4 hover:border-blue-600">
                  Courses
                </li>
              </a>
              <a href="/#mentors">
                <li className="ml-10 text-md  hover:border-b-4 hover:border-blue-600">
                  Mentors
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex pr-4">
          <a href="/signin">
            <button className="ml-10 px-4 py-2 text-white border bg-blue-600 border-blue-600 rounded-md">
              Sign In
            </button>
          </a>
          <a href="/signup">
            <button className="ml-10 px-4 py-2 text-white border bg-blue-600 border-blue-600 rounded-md">
              Sign Up
            </button>
          </a>
        </div>
        {/*END OF MENU ITEMS */}

        <div onClick={handleOpen} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {/* MOBILE MENU */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h1 className="text-2xl cursor-pointer font-bold">
                i<span className="text-blue-600 ">Learn</span>{" "}
              </h1>
              <div
                onClick={handleOpen}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-blue-600 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Premium Online Education
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </a>
              <a href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Courses
                </li>
              </a>
              <a href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Mentors
                </li>
              </a>
              <button className="text-lg  hover:border-b-2 hover:border-blue-600 text-blue-600">
                Sign In
              </button>
              <button className="ml-10 px-4 py-2 text-white border bg-blue-600 border-blue-600 rounded-md">
                Sign Up
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
