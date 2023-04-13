import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AccountTypes } from "../pages/signup";
import male from "../assets/male.png";
import female from "../assets/female.png";

function SignupOptions({ setAccountType }) {
  const [type, setType] = useState("");
  return (
    <div>
      <div className="h-screen flex">
        <div className="w-full max-w-[700px] m-auto bg-white rounded-lg py-10 px-16 border-2">
          <div className=" ">
            <div className="flex items-center justify-center  mb-4">
              <a href="/" className="text-4xl font-bold">
                i<span className="text-blue-600 ">Learn</span>{" "}
              </a>
            </div>
            <div>
              <p className="text-3xl font-bold py-4 text-center">
                Join as an instructor or a learner
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:px-8 py-6 md:gap-8 w-full justify-center ">
              <div className="relative cursor-pointer w-full shadow-sm rounded-xl flex flex-col justify-center px-4 h-[200px]">
                <img
                  className="rounded-xl group-hover:opacity-25 "
                  src={male}
                  alt="image"
                />
                <label className="label">
                  <span className="text-xl font-semibold">
                    I am an Instructor
                  </span>
                  <input
                    onChange={(e) => {
                      if (e.target.checked) setType(AccountTypes.instructor);
                    }}
                    type="radio"
                    name="radio-10"
                    className="radio "
                  />
                </label>
              </div>
              <div className="relative cursor-pointer w-full shadow-sm rounded-xl flex flex-col justify-center px-4 h-[200px]">
                <img
                  className="rounded-xl group-hover:opacity-25 "
                  src={female}
                  alt="image"
                />
                <label className="label">
                  <span className="text-xl font-semibold">I am a Learner</span>
                  <input
                    onChange={(e) => {
                      if (e.target.checked) setType(AccountTypes.student);
                    }}
                    type="radio"
                    name="radio-10"
                    className="radio"
                  />
                </label>
              </div>
            </div>
            <button
              onClick={() => setAccountType(type)}
              className="rounded-md px-4 py-3 my-2 mx-auto flex items-center bg-blue-600 text-white"
            >
              Create an account
            </button>
            <div className="w-full text-center">
              <p className="pt-10">
                <span className="text-zinc-400">Already have an account?</span>{" "}
                <Link to="/signin" className="cursor-pointer underline">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupOptions;
