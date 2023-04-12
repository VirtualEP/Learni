import React from "react";
import { NavLink } from "react-router-dom";

import illustration from "./../assets/illust1.png";

export default function LearnerSideBar() {
  return (
    <div className="md:w-1/5 border-r flex flex-col">
      <div className="w-full flex flex-col space-y-6 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 px-5 py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <a href="/" className="text-2xl font-bold ">
              i<span className="text-blue-600 ">Learn</span>{" "}
            </a>
          </div>
          <button className="mr-5 md:hidden flex">
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
        <NavLink
          to="overview"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row items-center space-x-3 bg-blue-600 py-4 rounded-full text-white px-5"
              : "flex flex-row items-center space-x-3 px-5 text-gray-500"
          }
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
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
          <p>Overview</p>
        </NavLink>
        <NavLink
          to="courses"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row items-center space-x-3 bg-blue-600 py-4 rounded-full text-white px-5"
              : "flex flex-row items-center space-x-3 px-5 text-gray-500"
          }
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
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
            />
          </svg>

          <p>Courses</p>
        </NavLink>
        <NavLink
          to="messages"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row items-center space-x-3 bg-blue-600 py-4 rounded-full text-white px-5"
              : "flex flex-row items-center space-x-3 px-5 text-gray-500"
          }
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
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <p>Messages</p>
        </NavLink>
        <NavLink
          to="explore"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row items-center space-x-3 bg-blue-600 py-4 rounded-full text-white px-5"
              : "flex flex-row items-center space-x-3 px-5 text-gray-500"
          }
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
              d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>

          <p>Explore</p>
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row items-center space-x-3 bg-blue-600 py-4 rounded-full text-white px-5"
              : "flex flex-row items-center space-x-3 px-5 text-gray-500"
          }
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
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <p>Settings</p>
        </NavLink>
      </div>
      <div className="flex-1"></div>
      <div className="m-3 bg-blue-100 rounded md:block hidden">
        <div className="p-3 flex flex-col space-y-3">
          <h1 className="font-semibold text-gray-700">Go premium</h1>
          <p className="text-xs text-gray-500">
            Explore 1000+ courses with some of the amzing teacher all over
            theworld without Adds.
          </p>
          <div>
            <button className="text-xs text-blue-600 bg-white p-3 rounded-full">
              Upgrade Now
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img className="h-[200px] w-2/3" src={illustration} />
        </div>
        <p className="text-xs m-1 text-gray-400 text-center">
          Illustration by{" "}
          <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
            Icons 8
          </a>{" "}
          from <a href="https://icons8.com/illustrations">Ouch!</a>
        </p>
      </div>
    </div>
  );
}
