import React from "react";
import googleLogo from "./../../assets/google-logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/Auth";
import GoogleLogin from "react-google-login";
import LoadingIcon from "../../components/LoadingIcon";
import { VITE_CLIENT_ID } from "../../App";
import { useState } from "react";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";

export default function Login() {
  const { login, loading } = useAuthContext();
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
  };

  const onSignInWithForm = (e) => {
    e.preventDefault();
    login(e.target[0].value, e.target[1].value);
  };

  const onSuccess = (res) => {
    console.log(res.profileObj);
  };
  const onFailure = (error) => {
    console.log(error.error);
  };

  return (
    <div className="min-h-screen bg-indigo-100/20 text-gray-900 flex ">
      <div className="backdrop-blur-[30px] bg-white/50 sm:rounded-lg flex justify-center flex-1 flex-row">
        <div className="lg:w-1/2 xl:w-6/12 px-6 sm:px-12 flex flex-col space-y-5 py-5">
          <div className="flex items-center justify-between md:px-5">
            <Link to="/" className="text-xl font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <span className="text-gray-600 ml-2">Dev</span>
              <span className="text-blue-600">Tray</span>
            </Link>
            <Link to="/signup" className="underline font-bold text-sm text-center text-gray-800">Create an account</Link>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-full flex-1 mt-6 flex flex-col justify-center ">
              <form method="POST" onSubmit={(e) => onSignInWithForm(e)}>
                <div className="mx-auto  max-w-sm flex flex-col space-y-10">

                  <div className="flex flex-col space-y-5">
                    <h1 className="text-2xl xl:text-3xl font-semibold leading-loose">Welcome Back</h1>
                    <div className="w-full flex items-center justify-center text-sm text-center">
                      <p className="font-normal leading-loose text-gray-500">Calling all Knowledge Seekers! Buckle Up, Log in, and Let the Learning Fiesta Begin!</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="flex items-center justify-center absolute pl-4">
                      <HiOutlineMail size={"18"} className="text-gray-400" />
                    </span>
                    <input
                      className="w-full px-10 py-4 rounded-lg font-medium bg-white border-2 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <span className="flex items-center justify-center absolute pl-4">
                      <HiOutlineLockClosed
                        size={"18"}
                        className="text-gray-400"
                      />
                    </span>
                    <input
                      className="w-full px-10 py-4 rounded-lg font-medium bg-white border-2 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <button
                    disabled={loading}
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    {loading && <LoadingIcon />}
                    <span className="ml-3">Sign In</span>
                  </button>

                  <div className=" border-b text-center">
                    <div className="leading-none px-3 inline-block text-xs text-gray-400 tracking-wide font-medium bg-white transform translate-y-[70%]">
                      or
                    </div>
                  </div>

                  {/* GOOGLE LOGIN */}
                  <div className="flex flex-col items-center">
                    <GoogleLogin
                      clientId={VITE_CLIENT_ID}
                      buttonText="Sign in with Google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy="single_host_origin"
                      className={` w-full flex items-center justify-center`}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Link to="/signup" className="underline font-bold text-sm text-center text-gray-800">Forgot password?</Link>

        </div>
        {/* Image render */}
        <div
          className="flex-1 bg-indigo-100 text-center hidden bg-cover lg:flex items-center justify-center my-3 mr-3"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/gradient-glassmorphism_23-2149456191.jpg')`,
          }}
        >
          <div className="backdrop-blur-[30px]  bg-white/20 w-3/4 h-2/3 p-20 px-28 flex-col space-y-4">
            <p className="text-white font-semibold text-left text-6xl leading-tight">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              </span>

              <span>Digital platform for disance</span> <span className="text-black">learning.</span>
            </p>
            <div className="text-white/60 text-left text-sm leading-snug">
              <p>You will never know everything.</p>
              <p>But you will know more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
