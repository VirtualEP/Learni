import React from "react";

function OverviewCard({ title, desc,  color }) {
  return (
    <div className="border-2 shadow-sm rounded-xl h-[10rem] hover:scale-110 ease-in duration-300 ">
      <div className=" px-8 justify-center items-center pt-2">
        <p className="my-4 text-md text-gray-400 font-bold">{title}</p>
        <a className={`text-3xl font-bold border-b-2 border-${color}-500`}>{desc}</a>           
      </div>
    </div>
  );
}

export default OverviewCard;
