import React, { useRef } from "react";
import { Link } from "react-router-dom";
import numToCurrency from "../../utils/numToCurrency";
import SkeletonLui from "./skeleton";
import social_ig from "./../../assets/social/ig.png";
import social_twitter from "./../../assets/social/twiter.png";
import mentors from "./../../assets/mentors.png";
import linkedin from "./../../assets/social/linkedin.png";
import github from "./../../assets/social/github.png";
import Footer from "../landing/Footer";
import LandFooter from "../../pages/landings/Footer";
import child from "../../assets/child.jpeg";
import boy from "../../assets/boy.jpeg";
import group from "../../assets/glass.jpeg";
import african from "../../assets/african.jpeg";

export default function Courselo() {
  const navbar_links = useRef();
  const navbar_actions = useRef();

  const smToogleOptions = () => {
    navbar_links.current.classList.toggle("hidden");
    navbar_actions.current.classList.toggle("hidden");
  };

  return (
    <div className="flex w-screen flex-col">
      <div className="flex-1 flex pb-10 md:pb-0 md:min-h-[100vh] bg-black min-h-[70vh] ">
        <div className="container mx-auto flex-1 flex flex-col">
          {/* nav bar */}
          <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row  md:items-center m-5 md:my-10 md:justify-between font-light mb-10">
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:space-x-10">
              <div className="flex items-center justify-between md:block">
                <div className="flex items-center md:justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                  <h1 className="text-2xl text-white font-bold cursor-pointer">
                    Dev<span className="text-blue-600 ">Tray</span>{" "}
                  </h1>
                  {/* MENU ITEMS */}
                </div>

                <button
                  onClick={smToogleOptions}
                  className="bg-blue-500 p-2 text-white rounded-md md:hidden"
                >
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
                      d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    />
                  </svg>
                </button>
              </div>

              <div
                ref={navbar_links}
                className="flex md:flex  bg-gray-900 md:bg-transparent rounded-lg p-3 flex-col space-y-5 md:space-y-0 md:flex-row md:items-center text-white md:space-x-5"
              >
                <Link to="/dashboard/explore">Courses</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/changelog">Changelog</Link>
              </div>
            </div>
            <div
              ref={navbar_actions}
              className="flex  md:flex items-center text-white space-x-5"
            >
              <Link
                className="bg-gray-900 px-10 py-2 rounded md:p-0 md:rounded-none md:bg-transparent"
                to="/signin"
              >
                Login
              </Link>
              <Link
                className="bg-white text-black font-bold px-8 py-2 rounded"
                to="/signup"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* hero */}
          <div className="flex flex-col md:flex-row items-center justify-center flex-1  space-x-10">
            <div className=" flex flex-col space-y-5 px-3 md:px-0">
              <p className="font-bold uppercase text-white text-xs">
                Upgrade your skill
              </p>
              <h3 className="text-5xl md:text-7xl text-white font-bold">
                Explore live <br /> creative classes
              </h3>
              <p className="text-gray-300 font-light text-md">
                Join a growing community and get peer insights and discover
                exciting opportunities and collaborations.
              </p>
              <div className="flex items-center space-x-5">
                <Link
                  className="text-white bg-blue-600 font-semibold p-4 rounded"
                  to="/signup"
                >
                  Sign up
                </Link>
                <Link
                  className="flex items-center space-x-3 text-white font-bold px-8 py-2 rounded"
                  to="#"
                >
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
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>

                  <p>How it works</p>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex flex-1  h-full space-x-3 items-center justify-center">
              <div className="w-[18vw] flex flex-col space-y-2  h-full">
                <div className="bg-blue-500 h-2/5 w-full p-3 rounded"></div>
                <div className="bg-white h-2/4 w-full p-3 rounded"></div>
                <div className="bg-white h-1/4 w-full p-3 rounded-t"></div>
              </div>
              <div className="w-[18vw] flex flex-col space-y-2  h-full">
                <div className="bg-white h-1/4 w-full p-3 rounded"></div>
                <div className="bg-white h-3/4 w-full p-3 rounded">
                  <img
                    src={group}
                    alt="blac"
                    className="h-fit w-full rounded-md"
                  />
                </div>
                <div className="bg-white h-1/3 w-full p-3 rounded-t"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-5 py-20 min-h-[20vh]">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-5 md:space-y-0 space-y-5">
          <div className="w-full md:w-1/3 md:border-r  border-black ">
            <h3 className="hidden md:block text-4xl font-bold capitalize text-gray-800 leading-snug">
              Online <br /> Learning <br />
              <span className="text-blue-600">designed</span> for <br />{" "}
              Students.
            </h3>
            <h3 className="md:hidden text-4xl font-bold capitalize text-gray-800 leading-snug">
              Online Learning <br />
              <span className="text-blue-600">designed</span> for <br />{" "}
              Students.
            </h3>
          </div>
          <div className="flex items-center">
            <div className="flex-1 md:px-5 flex flex-col space-y-2">
              <h4 className="font-bold">User friendly platform to learn</h4>
              <p className="font-light text-sm text-gray-500">
                Packed with morden technology and classroom learning experince.
              </p>
            </div>
            <div className="flex-1 md:px-5 flex flex-col space-y-2">
              <h4 className="font-bold">
                Highly skilled & experienced instructors
              </h4>
              <p className="font-light text-sm text-gray-500">
                Packed with morden technology and classroom learning experince.
              </p>
            </div>
            <div className="w-10 bg-green-700 h-full"></div>
          </div>
        </div>
      </div>

      <div className="min-h-[60vh] flex p-5">
        <div className="container mx-auto flex-1 flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1">
            <img className="" src={mentors} />
          </div>
          <div className="flex-1 flex flex-col space-y-5 h-full justify-center">
            <h3 className="font-bold text-4xl leading-snug">
              Experienced <br /> Course Mentor
            </h3>
            <p className="text-gray-500 font-light">
              Utilize this platform to gain various kinds of learning materials,
              campus acadamic systems and other educational needs.
            </p>
            <div className="pt-5">
              <Link
                className="text-white bg-blue-600 font-semibold px-8 py-3 rounded"
                to="/dashboard/explore"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full overflow-hidden">
        <div className="min-h-[80vh] flex md:flex-row flex-col w-full">
          <div className="md:w-3/5  bg-gray-100 md:rounded-r-2xl"></div>
          <div className="flex-1"></div>
        </div>
        <div className="min-h-[80vh] flex   absolute top-0 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center flex-1 container mx-auto">
            <div className="flex-1 rounded-r-2xl px-5 md:px-0">
              <div className="container mx-auto md:pr-10 flex flex-col space-y-6">
                <h3 className="font-bold text-3xl md:text-4xl leading-snug">
                  Keep your students <br /> engaged
                  <span className="text-blue-400">.</span>
                </h3>
                <p className="text-gray-700 font-light md:text-justify">
                  We help you create an interactive and captivating learning
                  environment for your students. We understand that students
                  engagement is crucial for effective learning, and we're here
                  to provide you with practical strategies and innovative ideas
                  to make your courses come alive.
                </p>
                <p className="text-gray-700 font-light md:text-justify">
                  We believe in empowering individuals and communities through
                  education, making learning accessible to all through
                  competitive pricing. Join us on a transformative journey of
                  knowledge acquisition and personal growth, where education
                  knows no boundaries. Welcome to DevTray.
                </p>
                <Link
                  className="flex items-center space-x-3 text-black font-bold  py-2 rounded"
                  to="#"
                >
                  <p>Read more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
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
            <div className="md:w-3/5 flex flex-1 items-center h-full space-x-5 py-10 justify-center px-5 md:px-0">
              <div className="flex flex-col flex-1 h-full space-y-5 justify-center">
                <div className="min-h-[45%] bg-white space-y-3 shadow-sm justify-center flex flex-col p-7 text-gray-500 font-light text-md border rounded border-t-4 border-t-violet-600">
                  <img src="http://placehold.it/" />
                  <h4 className="font-bold text-black">
                    Engage your audience.
                  </h4>
                  <p className="hidden md:block">
                    Our learning management system creates a personalize
                    experince for the learners.
                  </p>
                </div>
                <div className="min-h-[45%] bg-white space-y-3 shadow-sm justify-center flex flex-col p-7 text-gray-500 font-light text-md border rounded border-t-4 border-t-blue-600">
                  <img src="http://placehold.it/" />
                  <h4 className="font-bold text-black">
                    Turn ideas into reality.
                  </h4>
                  <p className="hidden md:block">
                    our learning management system creates a personalize
                    experince for the learners.
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-1 h-full space-y-5 justify-center">
                <div className="min-h-[45%] bg-white space-y-3 shadow-sm justify-center flex flex-col p-7 text-gray-500 font-light text-md border rounded border-t-4 border-t-blue-600">
                  <img src="http://placehold.it/" />
                  <h4 className="font-bold text-black">Learn it your way.</h4>
                  <p className="hidden md:block">
                    our learning management system creates a personalize
                    experince for the learners.
                  </p>
                </div>
                <div className="min-h-[45%] bg-white space-y-3 shadow-sm justify-center flex flex-col p-7 text-gray-500 font-light text-md border rounded border-t-4 border-t-violet-600">
                  <img src="http://placehold.it/" />
                  <h4 className="font-bold text-black">
                    Put the fun into learning.
                  </h4>
                  <p className="hidden md:block">
                    our learning management system creates a personalize
                    experince for the learners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[100vh] overflow-hidden flex  flex-col md:flex-row items-center justify-center">
        <div className="bg-black min-h-[70vh]  mx-auto md:w-[90vw] md:rounded-xl p-10 flex flex-col space-y-10 md:items-center justify-center">
          <h3 className="text-white  text-4xl text-left md:text-center">
            Top Courses<span className="text-blue-300">.</span>
          </h3>
          <p></p>
          <div className="flex items-center space-x-5  overflow-x-auto w-full">
            <div className="w-[250px] flex flex-col space-y-3">
              <div
                className="w-[250px] bg-gray-200  h-40 rounded-lg overflow-hidden bg-center bg-cover"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1687229763648-c3f43c8ffb22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80')`,
                }}
              ></div>
              <h3 className="text-white font-bold text-sm">
                Programing: Introduction to Python programming
              </h3>
              <div className="flex flex-row items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-white relative"></div>
                <h2 className="text-white">Devtray</h2>
                <div className="flex-1"></div>
                <Link
                  to="#"
                  className="text-indigo-400 shrink-0 font-semibold border-b border-b-indigo-400"
                >
                  Join Class
                </Link>
              </div>
            </div>

            <SkeletonLui />
            <SkeletonLui />
            <SkeletonLui />
            <SkeletonLui />
            <SkeletonLui />
            <SkeletonLui />
          </div>
          <Link
            className="text-white bg-blue-600 font-semibold px-8 py-3 rounded w-fit"
            to="/dashboard/explore"
          >
            Start Learning
          </Link>
        </div>
      </div>

      <LandFooter />
    </div>
  );
}
