import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SkeletonLui from "./skeleton";
import mentors from "./../../assets/mentors.png";
import LandFooter from "../../pages/landings/Footer";
import group from "../../assets/glass.jpeg";
import african from "../../assets/african.jpeg";
import { HiOutlineHome, HiOutlineUserGroup } from "react-icons/hi";


import trainingIcon from "../../assets/training.png";
import liveClassIcon from "../../assets/live.png";
import ideaIcon from "../../assets/idea.png";
import recruitmentIcon from "../../assets/recruitment.png";
import confettiIcon from "../../assets/confetti.png";
import configurationIcon from "../../assets/configuration.png";

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

              <div ref={navbar_links} className="flex md:flex  bg-gray-900 md:bg-transparent rounded-lg p-3 flex-col space-y-5 md:space-y-0 md:flex-row md:items-center text-white md:space-x-5">
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
              <div className="flex items-center space-x-1 md:space-x-5">
                <Link className="text-white bg-blue-600 font-semibold px-5 py-3 rounded" to="/signup">
                  Sign up for free
                </Link>
                <Link className="flex items-center space-x-3 text-white font-bold px-8 py-2 rounded" to="#">
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
                <div className="bg-blue-500 h-2/5 w-full p-3 rounded relative">

                    <div className="absolute bottom-3 right-20 h-10 w-10 rounded-full bg-black" />
                    <div className="absolute w-2/4 h-3  -rotate-12 bottom-20 right-0 bg-black" />
                    <div className="absolute bottom-12 -right-4 w-2/4 h-1 -rotate-45 bg-black" />
                </div>
                <div className="bg-white bg-center bg-cover h-2/4 w-full p-3 rounded" style={{backgroundImage:`url(https://images.unsplash.com/photo-1612299273045-362a39972259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)`}}>
                  
                </div>
                <div className="bg-white h-1/4 w-full p-3 rounded-tbg-center bg-cover rounded-t" style={{backgroundImage:`url(https://images.unsplash.com/photo-1552058456-adc0aabef0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80`}}></div>
              </div>
              <div className="w-[18vw] flex flex-col space-y-2  h-full">
                <div className="bg-white h-1/4 w-full p-3 rounded"  style={{backgroundImage:`url(https://images.unsplash.com/photo-1617550529026-df6214fe8b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)`}}></div>
                <div className="bg-white h-3/4 w-full p-3 rounded bg-center bg-cover" style={{backgroundImage:`url(https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)`}}>
               
                </div>
                <div className="bg-white h-1/3 w-full p-3 rounded-t bg-center bg-cover" style={{backgroundImage:`url(https://images.unsplash.com/photo-1612115958726-9af4b6bd28d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)`}}>
                 
                </div>
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
          <div className="md:w-1/3 flex  flex-col  space-y-3 p-2">
            <img src={liveClassIcon} className="w-10" />
            <h3 className="font-bold text-gray-800">User-Frendly platform to learn</h3>
            <p>packed with morden technology, classroom learning which is used to be done conventionaly</p>
          </div>
          <div className="md:w-1/3 flex  flex-col  space-y-3 p-2">
          <img src={trainingIcon} className="w-10" />
            <h3 className="font-bold text-gray-800">User-Frendly platform to learn</h3>
            <p>packed with morden technology, classroom learning which is used to be done conventionaly</p>
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
              Experienced <br /> Course Mentors
            </h3>
            <p className="text-gray-500 font-light">
              Utilize this platform to gain various kinds of learning materials,
              campus academic systems and other educational needs.
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
        <div className="min-h-[82vh] flex md:flex-row flex-col w-full">
          <div className="md:w-3/5  bg-gray-100 md:rounded-r-2xl"></div>
          <div className="flex-1"></div>
        </div>
        <div className="min-h-[80vh] flex absolute top-0 w-full">
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
               
              </div>
            </div>
            <div className="md:w-3/5 flex flex-1 items-center h-full space-x-5 py-10 justify-center px-5 md:px-0">
              <div className="flex flex-col flex-1 h-full space-y-5 justify-center">
                <div className="min-h-[45%] bg-white space-y-3 shadow-sm justify-center flex flex-col p-7 text-gray-500 font-light text-md border rounded border-t-4 border-t-violet-600">
                  <img className="rounded h-10 w-10" src={recruitmentIcon} />
                  <h4 className="font-bold text-black">
                    Engage your audience.
                  </h4>
                  <p className="hidden md:block">
                    Engaging elements break down complex concepts, stimulate curiosity, and encourage active participation, resulting in a deeper understanding of the subject matter.
                  </p>
                </div>
                <div className="min-h-[45%] bg-white space-y-3 shadow-sm justify-center flex flex-col p-7 text-gray-500 font-light text-md border rounded border-t-4 border-t-blue-600">
                <img className="rounded h-10 w-10" src={ideaIcon} />
                  <h4 className="font-bold text-black">
                    Turn ideas into reality.
                  </h4>
                  <p className="hidden md:block">
                    Transform ideas into tangible outcomes through comprehensive resources and practical activities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-1 h-full space-y-5 justify-center">
                <div className="min-h-[45%] bg-white space-y-3 shadow-sm justify-center flex flex-col p-7 text-gray-500 font-light text-md border rounded border-t-4 border-t-blue-600">
                <img className="rounded h-10 w-10" src={configurationIcon} />
                  <h4 className="font-bold text-black">Learn it your way.</h4>
                  <p className="hidden md:block">
                    With a variety of learning paths and flexible course structures, students can tailor their learning journey to match their interests, goals, and preferred learning style.
                  </p>
                </div>
                <div className="min-h-[45%] bg-white space-y-3 shadow-sm justify-center flex flex-col p-7 text-gray-500 font-light text-md border rounded border-t-4 border-t-violet-600">
                <img className="rounded h-10 w-10" src={confettiIcon} />
                  <h4 className="font-bold text-black">
                    Put the fun into learning.
                  </h4>
                  <p className="hidden md:block">
                    Students can earn rewards, badges, and achievements as they progress, creating a sense of accomplishment and motivating them to reach new heights.
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
                  backgroundImage: `url('https://i.pinimg.com/564x/65/a2/46/65a2460a242975f70b6c58d2eb9c2134.jpg')`,
                }}
              ></div>
              <h3 className="text-white font-bold text-sm">
                Programming: Introduction to Python programming
              </h3>
              <div className="flex flex-row items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-white relative"></div>
                <h2 className="text-white">Devtray</h2>
                <div className="flex-1"></div>
                <Link
                  to="/dashboard/courses"
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
