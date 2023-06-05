import React from "react";
import { HiOutlineHome, HiOutlineUserGroup, HiOutlineUsers } from "react-icons/hi";

const Teams = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0">
      <div className="md:w-1/3 flex items-center space-x-3 border border-gray-100 p-2 bg-white rounded-md">
        <div className="h-16 w-20 shrink-0 bg-yellow-400 rounded-sm flex items-center justify-center">
        <span>
            <HiOutlineUserGroup size={20}/>
          </span>
        </div>
        <div>
         
          <p className="text-sm font-bold mb-1">Best Instructors</p>
          <p className="text-xs text-gray-400">
            We have highly skilled & highly experienced instructors accross the
            nation.
          </p>
        </div>
      </div>

      <div className="md:w-1/3 flex items-center space-x-3 border border-gray-100 p-2 bg-white rounded-md">
        <div className="h-16 w-20 shrink-0 bg-purple-400 rounded-sm flex items-center justify-center">
        <span>
            <HiOutlineHome size={20}/>
          </span>
        </div>
        <div>
          <p className="text-sm font-bold mb-1">Live Class</p>
          <p className="text-xs text-gray-400">
            We offer live classes to give students the best education and
            experience.
          </p>
        </div>
      </div>

      <div className="md:w-1/3 flex items-center space-x-3 border border-gray-100 p-2 bg-white rounded-md">
        <div className="h-16 w-20 shrink-0 bg-blue-400 rounded-sm flex items-center justify-center">
          <span>
            <HiOutlineUsers size={20}/>
          </span>
        </div>
        <div>
          <p className="text-sm font-bold mb-1">1 to 1 support</p>
          <p className="text-xs text-gray-400">
            We give our students best support always & all time 24/7.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
