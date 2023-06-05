import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "react-apexcharts";

export default function Overview() {
  return (
    <div className="flex-1 flex flex-row  space-x-3 overflow-hidden">
      <div className=" flex flex-col w-1/3  min-h-[20vh] space-y-5 shrink-0">
        <div className="w-full bg-white">
          <div className="flex items-center border">
            <div className="bg-white px-10 flex-1 py-10">
              <h3 className="font-medium text-gray-500 text-sm">Courses</h3>
              <p className="text-3xl font-bold">2</p>
            </div>
            <div className="bg-white px-10 flex-1 py-10 border-l">
              <h3 className="font-medium text-gray-500 text-sm">Enrollments</h3>
              <p className="text-3xl font-bold">20</p>
            </div>
          </div>
          <div className="bg-white py-5 px-5 border-l border-r  border-b">
            <h3 className="font-light text-sm">Account Balance</h3>
            <p className="font-bold text-2xl mt-1">GHS 2003.00</p>
          </div>
        </div>

        <div className="border flex flex-col space-y-3 p-5 text-sm">
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg">Recent Comments</h3>
          </div>
          <div>
            <div className="flex flex-row space-x-3">
              <div className="h-10 w-10 shrink-0 flex items-center justify-center font-bold rounded-full bg-gray-400 text-xs border">
                <p>AT</p>
              </div>
              <div className="flex flex-col mt-1 space-y-1">
                <p className="font-medium">Devtray Developers</p>
                <p className="text-gray-500 font-light text-sm">
                  My installation proccess didn't work on my windows machine.
                </p>
                <div className="font-bold text-sm pt-3">
                  <button className="flex items-center space-x-1">
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
                        d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
                      />
                    </svg>
                    <p>Reply</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/3 h-[100%] flex flex-col space-y-5">
        {/* recent enrollment */}
        <div className="border flex flex-col space-y-3 p-5 text-sm">
          <div className="flex flex-col space-y-1">
            <h3 className="font-bold text-lg">Important notifications</h3>
            <h3 className="font-medium text-sm text-gray-600">
              Video received a copyright claim
            </h3>
          </div>
          <p className="text-gray-500 font-light">
            A copyright owner claimed some content in your video, "Internet
            reaction to The Little Mermaid #trevornoah #hailey #hiphop #music
            #movie #rap #hiphop". Please note: This is not a copyright strike.
            May 29, 2023, 6:24 PM
          </p>
        </div>
        <div className="w-full min-h-80 flex flex-col  ">
          <div className="w-full flex-1 flex flex-col h-full border">
            {/* list of recent enrollment */}
            <div className=" p-5">
              <h3 className="pb-1 font-medium text-gray-700">
                Recent Enrollments
              </h3>
              <p className="text-xs text-gray-400">
                Most recent enrollment to in your courses.
              </p>
              <div className="h-5"></div>
              {/* recent card */}
              {[1, 2, 3, 4, 5].map((data, index) => (
                <div className="my-2" key={`recent-enrolment-${index}-`}>
                  <div className="flex flex-row space-x-3">
                    <img
                      className="h-10 w-10 rounded-full shrink-0"
                      src={
                        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      }
                    />
                    <div className="items-center h-full flex-1">
                      <h4 className="text-sm font-bold">Jannet Heganan</h4>
                      <p className="text-xs font-medium text-gray-400">
                        jannethegann@gmail.com
                      </p>
                    </div>
                    <div className="">
                      <p className="text-xs text-gray-600 font-medium">
                        3 mins ago
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${
                      index !== 4 && "border-b py-4"
                    } border-gray-50  pl-5`}
                  >
                    {/* <p className='text-green-700 text-sm font-medium'>+ GHS 200.00</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* analytics */}
        <div className="w-1/3   h-[100%] flex flex-col"></div>
      </div>

      <div className=" w-1/3 h-[100%] flex flex-col space-y-5">
        {/* recent enrollment */}
        <div className="border flex flex-col space-y-3 p-5 text-sm">
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg">What's new in Creators</h3>
          </div>
          <h3 className="font-bold text-sm text-gray-600">
            How to create a new course
          </h3>
          <p className="text-gray-500 font-light">
            Learn to create and publish a new course to DevTray
          </p>
        </div>

        <div className="border flex flex-col space-y-3 p-5 text-sm">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">Get Started</h3>
              <div className="flex items-center space-x-2">
                <button>
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
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <p>
                  1 <span className="text-gray-300">/</span> 3
                </p>
                <button>
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="h-36  bg-center bg-cover"
              style={{
                backgroundImage: `url(https://www.freecodecamp.org/news/content/images/2022/02/Banner-10.png)`,
              }}
            ></div>
          </div>
          <h3 className="font-bold text-sm text-gray-600">
            How to create a new course
          </h3>
          <p className="text-gray-500 font-light">
            Learn to create and publish a new course to DevTray
          </p>
        </div>
      </div>
    </div>
  );
}
