import React from "react";
import googleLogo from "./../../assets/google-logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/Auth";
import GoogleLogin from "react-google-login";
import LoadingIcon from "../../components/LoadingIcon";
import { VITE_CLIENT_ID } from "../../App";

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
      <div className="max-w-screen-xl sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <a href="/" >
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
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                  <button
                    disabled={loading}
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                   
                    {loading ? <LoadingIcon /> :  <svg
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
                    </svg>}

                    <span className="ml-3">Sign In</span>
                  </button>
                </div>
              </form>
              <div className="w-full flex flex-row text-sm items-center justify-between mt-12">
                <Link
                  to="/signup"
                  className="font-bold text-xs underline text-gray-600"
                >
                  Don't have an account?
                </Link>
                <a
                  className="font-bold text-xs underline text-gray-600"
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
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                " url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
    // <div className="w-screen h-screen bg-white flex flex-col">
    //   <div></div>
    //   <div className="flex-1 flex flex-row items-center  px-6 md:px-0">
    //     <div
    //       className="flex-1 border-l h-full hidden md:flex"
    //       style={{
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         background: `url('https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,
    //       }}
    //     ></div>
    //     <div className="flex-1">
    //       <div className="flex flex-col items-center space-y-6 w-full md:w-1/2 mx-auto">
    //         <div className="w-full flex flex-col space-y-10">
    //           <h1 className="text-center font-bold text-3xl">Welcome back</h1>
    //           <GoogleLogin
    //             clientId={VITE_CLIENT_ID}
    //             buttonText="Sign in with Google"
    //             onSuccess={onSuccess}
    //             onFailure={onFailure}
    //             cookiePolicy="single_host_origin"
    //             className={`text-center items-center justify-center border-2 border-gray-800 shadow-sm text-black`}
    //           />
    //         </div>
    //         <div className="flex flex-row items-center w-full">
    //           <hr className="flex-1" />
    //           <h4 className="px-10 text-sm text-gray-400">or</h4>
    //           <hr className="flex-1" />
    //         </div>
    //         <form
    //           method="POST"
    //           onSubmit={(e) => onSignInWithForm(e)}
    //           className="flex flex-col w-full space-y-4"
    //         >
    //           <div className="flex flex-col w-full space-y-2">
    //             <label className="font-medium text-gray-600 text-sm">
    //               Email
    //             </label>
    //             <input
    //               className="border px-4 py-4 text-sm bg-white"
    //               required
    //               type="email"
    //               name="email"
    //               placeholder="Enter your email"
    //             />
    //           </div>
    //           <div className="flex flex-col w-full space-y-2">
    //             <label className="font-medium text-gray-600 text-sm">
    //               Password
    //             </label>
    //             <input
    //               className="border px-4 py-4 text-sm bg-white"
    //               required
    //               type="password"
    //               name="password"
    //               placeholder="Enter your password"
    //             />
    //           </div>
    //           <button
    //             disabled={loading}
    //             type="submit"
    //             className="flex flex-row w-full items-center bg-[rgb(67,56,246)] text-center text-white font-smibold px-4 py-3 text-lg justify-center"
    //           >
    //             {loading && <LoadingIcon />}
    //             <p>Login</p>
    //           </button>
    //         </form>
    //         <div className="w-full flex flex-row text-sm items-center justify-between">
    //           <Link
    //             to="/signup"
    //             className="font-bold text-xs underline text-gray-600"
    //           >
    //             Don't have an account?
    //           </Link>
    //           <a className="font-bold text-xs underline text-gray-600" href="#">
    //             Forgot Password?
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
