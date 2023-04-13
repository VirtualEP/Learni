import React from "react";
import googleLogo from "./../../assets/google-logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/Auth";
import GoogleLogin from "react-google-login";
import LoadingIcon from "../../components/LoadingIcon";
import { VITE_CLIENT_ID } from "../../App";
import student  from "../../assets/student.png";

export default function Login() {
  const { login, loading } = useAuthContext();

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
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-lg sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <a href="/">
              <h1 className="text-4xl cursor-pointer font-bold justify-center flex ">
                i<span className="text-blue-600 ">Learn</span>
              </h1>
            </a>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-bold"> Welcome Back</h1>
            <div className="w-full flex-1 mt-8">
              {/* GOOGLE LOGIN */}
              <div className="flex flex-col items-center">
                <GoogleLogin
                  clientId={VITE_CLIENT_ID}
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy="single_host_origin"
                  className={`max-w-xs w-full flex items-center justify-center`}
                />
              </div>
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign in with e-mail
                </div>
              </div>
              <form method="POST" onSubmit={(e) => onSignInWithForm(e)}>
                <div className="mx-auto max-w-lg">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <button
                    disabled={loading}
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    {loading && <LoadingIcon />}
                    {/* <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg> */}

                    <span className="ml-3">Sign In</span>
                  </button>
                </div>
              </form>
              <div className="w-full flex text-sm items-center justify-center mt-6">
                <p>Don't have an account?</p>
                <Link
                  to="/signup"
                  className="font-bold text-xs text-gray-600 no-underline"
                >
                  <span className="ml-2 underline text-xs">Sign up here</span>
                </Link>
              </div>
              <div className="flex justify-center mt-2">
                <a
                  className="font-bold text-xs underline text-gray-400"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Image render */}
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center justify-center items-center flex bg-no-repeat">
            <img src={student} />
          </div>
        </div>
      </div>
    </div>
  );
}
