import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AccountTypes } from "../pages/signup";
import male from "../assets/male.png";
import female from "../assets/female.png";

function SignupOptions({ setAccountType }) {
  const [type, setType] = useState("");
  const [disable, setDisabled] = useState(true)
  return (
    <div>
      <div className="h-screen flex">
        <div className="w-full max-w-2xl m-auto bg-white rounded-lg py-8 px-10 border-2">
          <div className=" ">
            <div className="flex items-center justify-center  mb-4">
              <a href="/" className="text-2xl font-bold">
                Dev<span className="text-blue-600 ">Tray</span>{" "}
              </a>
            </div>
            <div>
              <p className="text-lg font-bold py-4 text-center">
                Join as an instructor or a learner
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-5 space-y-20 md:space-y-0 md:px-8 py-6 md:gap-8 w-full justify-center ">
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
                    className="radio border-2 border-gray-600"
                  />
                </label>
              </div>
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
                    className="radio border-2 border-gray-600"
                  />
                </label>
              </div>
            
            </div>
            <button
              onClick={() => setAccountType(type)}
              className=" rounded-md px-4 py-3 my-4 mx-auto flex items-center bg-blue-600 text-white"
            >
              Create an account
            </button>
            <div className="w-full text-center text-sm">
              <p className="">
                <span className="text-zinc-700">Already have an account?</span>{" "}
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
