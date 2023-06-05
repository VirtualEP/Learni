import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col-reverse md:flex-row min-h-screen items-center container mx-auto space-x-0 md:space-x-10 space-y-5  md:space-y-0 py-10 px-5 md:px-0"
    >
      <div className="w-full md:w-1/3 border-4">
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_v1yudlrx.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
      <div className="flex-1 flex flex-col space-y-3">
        <div>
          <h3 className="text-gray-900 font-bold text-2xl">Our Motivation</h3>
        </div>
        <p className="text-gray-500">
          Our platform connects learners with expert instructors, offering a
          diverse catalog of courses designed to enhance personal and
          professional growth. With a team of passionate educators and industry
          experts, we combine innovative technology with pedagogical excellence
          to create an engaging and flexible learning environment. We believe in
          empowering individuals and communities through education, making
          learning accessible to all through competitive pricing. Join us on a transformative journey of knowledge
          acquisition and personal growth, where education knows no boundaries.
          Welcome to DevTray.
        </p>
        {/* <Link to="/" className="flex items-center space-x-4">
          <p>Read more</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link> */}
      </div>
    </div>
  );
};

export default About;
