import React from 'react'
import numToCurrency from '../../utils/numToCurrency';

const Programs = () => {
  return (
    <div id="courses" className="container mx-auto flex flex-col space-y-20 my-20 hide-scrollbar py-5 min-h-screen">
      <div className="flex flex-col space-y-10">
        <h2 className="text-center text-2xl font-bold">Our popular courses</h2>
        <div className="flex text-sm items-center justify-between text-gray-500 overflow-y-auto gap-4">
          <button className="font-bold text-black">Programing</button>
          <button className="shrink-0">Python</button>
          <button className="shrink-0">Graphic Design</button>
          <button className="shrink-0">Network Adminstration</button>
          <button className="shrink-0">Cyber Security</button>
          <button className="shrink-0">Web Design</button>
          <button className="shrink-0">Web Design</button>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0 my-10 p-2">
        <div className="md:w-1/3  min-h-48 flex flex-col md:space-x-5 space-y-4 md:space-y-0 bg-white border p-2 rounded-md overflow-hidden">
          <div
            className="h-40  bg-cover bg-center rounded-md overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80')`,
            }}
          ></div>
          <div className="p-2 flex flex-col space-y-2">
            <p className="text-gray-400 capitalize text-xs">python</p>
            <p className="font-medium text-lg">
              Introduction to python programing
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">
                {numToCurrency.format(100)}
              </p>
              <button className="bg-blue-400 text-[12px] text-white px-5 py-2 rounded-full font-medium">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 min-h-48 flex flex-col space-y-5 bg-white border p-2 rounded-md overflow-hidden">
          <div
            className="h-40 bg-cover bg-center rounded-md overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80')`,
            }}
          ></div>
          <div className="p-2 flex flex-col space-y-2">
            <p className="text-gray-400 capitalize text-xs">python</p>
            <p className="font-medium text-lg">
              Introduction to python programing
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">
                {numToCurrency.format(100)}
              </p>
              <button className="bg-blue-400 text-[12px] text-white px-5 py-2 rounded-full font-medium">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 min-h-48 flex flex-col space-y-5 bg-white border p-2 rounded-md overflow-hidden">
          <div
            className="h-40 bg-cover bg-center rounded-md overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80')`,
            }}
          ></div>
          <div className="p-2 flex flex-col space-y-2">
            <p className="text-gray-400 capitalize text-xs">python</p>
            <p className="font-medium text-lg">
              Introduction to python programing
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">
                {numToCurrency.format(100)}
              </p>
              <button className="bg-blue-400 text-[12px] text-white px-5 py-2 rounded-full font-medium">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs