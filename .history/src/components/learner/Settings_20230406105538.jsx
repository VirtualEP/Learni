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
          <div >
          <h1 className="text-xl pt-5 font-bold ">Profile Settings</h1>
          <div className="pt-8 grid md:grid-cols-2 gap-8">
          <div className='col-span-3 w-full h-auto shadow-lg shadow-gray-300 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form action='https://getform.io/f/f2e84308-1625-4c76-a34e-d6b30cf77d56' method='POST'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className="flex flex-col">
                                        <label className='text-sm uppercase py-2'>Name</label>
                                        <input className='border-2 rounded-lg  p-3 flex border-purple-100' name="name" required type="text" />

                                    </div>
                                    <div className="flex flex-col">
                                        <label className='text-sm uppercase py-2'>Phone number</label>
                                        <input className='border-2 rounded-lg  p-3 flex border-purple-100' name="number" required type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className='text-sm uppercase py-2'>Email</label>
                                    <input className='border-2 rounded-lg  p-3 flex border-purple-100' name="email" required type="email" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className='text-sm uppercase py-2'>Subject</label>
                                    <input className='border-2 rounded-lg  p-3 flex border-purple-100' required type="text" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className='text-sm uppercase py-2'>Message</label>
                                    <textarea className="border-2 rounded-lg p-3 border-purple-100" rows='10' required></textarea>
                                </div>
                               <button className='border-2 border-purple-600 px-4 py-3 my-2 mx-auto flex items-center'>Send Message</button>
                            </form>
                        </div>
                    </div>
            
          </div>


          </div>

        </div>
      </div>
    </div>
  );
}
