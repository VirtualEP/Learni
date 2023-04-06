import React from "react";
import MentorCard from "../card/MentorCard";

function Mentors() {
  return (
    <div id="mentors" className="w-full lg:h-full bg-[#EDEEF8]">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center w-full px-2 py-24">
        <div>
          <p className="text-3xl text-gray-600 font-bold inline border-b-4 border-blue-600">
            Instructors & Students
          </p>
          <p className="py-6">
            Get the best course with the best price with world-class tutors
          </p>
        </div>
        <div>
          <MentorCard />
        </div>
      </div>
    </div>
  );
}

export default Mentors;
