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
    <div className="w-screen h-screen bg-white flex flex-col">
      <div></div>
      <div className="flex-1 flex flex-row items-center  px-6 md:px-0">
        <div
          className="flex-1 border-l h-full hidden md:flex"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            background: `url('https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,
          }}
        ></div>
        <div className="flex-1">
          <div className="flex flex-col items-center space-y-6 w-full md:w-1/2 mx-auto">
            <div className="w-full flex flex-col space-y-10">
              <h1 className="text-center font-bold text-3xl">Welcome back</h1>
              <GoogleLogin
                clientId={VITE_CLIENT_ID}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
                className={`text-center items-center justify-center border-2 border-gray-800 shadow-sm text-black`}
              />
            </div>
            <div className="flex flex-row items-center w-full">
              <hr className="flex-1" />
              <h4 className="px-10 text-sm text-gray-400">or</h4>
              <hr className="flex-1" />
            </div>
            <form
              method="POST"
              onSubmit={(e) => onSignInWithForm(e)}
              className="flex flex-col w-full space-y-4"
            >
              <div className="flex flex-col w-full space-y-2">
                <label className="font-medium text-gray-600 text-sm">
                  Email
                </label>
                <input
                  className="border px-4 py-4 text-sm bg-white"
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col w-full space-y-2">
                <label className="font-medium text-gray-600 text-sm">
                  Password
                </label>
                <input
                  className="border px-4 py-4 text-sm bg-white"
                  required
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="flex flex-row w-full items-center bg-[rgb(67,56,246)] text-center text-white font-smibold px-4 py-3 text-lg justify-center"
              >
                {loading && <LoadingIcon />}
                <p>Login</p>
              </button>
            </form>
            <div className="w-full flex flex-row text-sm items-center justify-between">
              <Link
                to="/signup"
                className="font-bold text-xs underline text-gray-600"
              >
                Don't have an account?
              </Link>
              <a className="font-bold text-xs underline text-gray-600" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
