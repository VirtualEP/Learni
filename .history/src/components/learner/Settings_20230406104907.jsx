import React from "react";
import { NavLink } from "react-router-dom";

export default function Settings() {
  return (
    <div className="flex-1 flex border-t -mx-5 ">
      <div className="w-1/4 border-r bg-white-50 flex flex-col  space-y-8 border-gray-100 px-5">
        <h1 className="text-2xl pt-5 font-bold ">Account Settings</h1>
        <div className="w-full flex flex-col space-y-6 p-3">
          <div className="flex items-center justify-between">
            <div>
            <NavLink to="overview" className={({ isActive }) => isActive ? 'flex flex-row items-center space-x-3 bg-blue-600 py-4 rounded-full text-white px-5' : 'flex flex-row items-center space-x-3 px-5 text-gray-500'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                    </svg>
                    <p>Profile</p>
                </NavLink>

            </div>

          </div>

        </div>
      </div>
      <div className="w-3/4 border-r bg-white-50 flex flex-col  space-y-8 border-gray-100 px-5">
        <div className="w-full flex flex-col space-y-6">
          <div className="bg-white shadow-lg p-4 mx-4 rounded-md mt-5">
          <h1 className="text-2xl pt-5 font-bold ">Account Settings</h1>


          </div>

        </div>
      </div>
    </div>
  );
}
