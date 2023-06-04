import React from 'react'
import { Link } from 'react-router-dom';
import child from '../../assets/child.jpeg'
import boy from "../../assets/boy.jpeg";
import group from "../../assets/group.jpeg";
import african from "../../assets/african.jpeg";

const Hero = () => {
  return (
    <div
      id="home"
      className="container mx-auto md:h-screen flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-10 items-center"
    >
      <div className="w-full md:w-1/3 shrink-0 px-5 py-10 md:py-0 md:px-0">
        <h3 className="text-[30px] md:text-[50px] font-bold leading-relaxed">
          Quality <span className="text-blue-500">Education</span> accessible
          online
        </h3>
        <div className="flex items-center space-x-3 mt-4 font-medium">
          <Link to="/signup">
            <button className="bg-white border-blue-600 px-4 shadow text-blue-600 py-2 flex-1 rounded-full border">
              {" "}
              Be part of us{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full flex-col space-y-5 hidden md:flex">
        <div className="flex items-center space-x-5">
          <img src={child} alt="blac" className="h-[230px] w-1/2 rounded-md" />
          <img src={boy} alt="blac" className="h-[230px] w-1/2 rounded-md" />
        </div>
        <div className="flex items-center space-x-5">
          <img src={group} alt="blac" className="h-[230px] w-1/2 rounded-md" />
          <img
            src={african}
            alt="blac"
            className="h-[230px] w-1/2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero