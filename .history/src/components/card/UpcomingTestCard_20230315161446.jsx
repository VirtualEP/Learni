import React from "react";
import { FaAngleRight } from "react-icons/fa";

function UpcomingTestCard({ title, desc, date }) {
  return (
    <div>
      <div className=" shadow-sm shadow-[#d926a9] rounded-md p-4 lg:max-w-lg mx-4 mt-4">
        <div className="space-y-2 flex">
          <h1 className="text-md font-semibold">{title}</h1>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">{desc}</p>
          <span>{date}</span>
          <FaAngleRight />
        </div>
      </div>
  
    </div>
  );
}

export default UpcomingTestCard;
