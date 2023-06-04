import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id='about' className="flex flex-col md:flex-row  items-center container mx-auto space-x-0 md:space-x-10 space-y-5  md:space-y-0 py-10 px-5 md:px-0">
      <div className="w-full md:w-1/3 bg-gray-100 h-[220px] rounded-md"></div>
      <div className="flex-1 flex flex-col space-y-3">
        <div>
          <h3 className="text-gray-900 font-bold text-2xl">Our Motivation</h3>
          <h4 className="text-gray-900 font-medium text-lg">
            The reason why we do what we do
          </h4>
        </div>
        <p className="text-gray-500">
          Our mission is to develop critical thinking skills in kids by training
          them with a kids-friendly approach to computer programming. We believe
          the average kid can be able to understand how codes work and with
          that, solve problems to make a change.
        </p>
        <Link to="/" className="flex items-center space-x-4">
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
        </Link>
      </div>
    </div>
  );
}

export default About