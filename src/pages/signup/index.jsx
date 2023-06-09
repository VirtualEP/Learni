import React, { useRef, useState, useEffect } from "react";
import { SUPPORTED_COUNTRIES } from "../../data";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { SignupOptions } from "../../components";
import { useAuthContext } from "../../context/Auth";
import { VITE_CLIENT_ID } from "../../App";
import LoadingIcon from "../../components/LoadingIcon";
import instructor from "../../assets/instructor.png";
import {
  HiOutlineEye,
  HiOutlineEyeOff,
  HiOutlineLockClosed,
  HiOutlineMail,
} from "react-icons/hi";

export const AccountTypes = {
  instructor: "instructor",
  student: "learner",
};

export default function Signup() {
  const [showCountryList, setShowCountryList] = useState(false);

  const [country, setCountry] = useState({ name: "", flag: "?" });

  const [AccountType, setAccountType] = useState("");

  const countryInput = useRef();

  const { register, loading } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  const [hidePassword, setHidePassword] = useState(true);

  const [emailError, setEmailError] = useState(false)

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);



  //SHOW AND HIDE PASSWORD
  const onShowPassword = () => {
    setShowPassword(false);
    setHidePassword(true);
  };

  const onHidePassword = () => {
    setHidePassword(false);
    setShowPassword(true);
  };
  // EMAIL FIELD ONCHANGE
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsButtonDisabled(value.trim() === '' || password.trim() === '');
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!value.match(emailRegex)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

     // PASSWORD FIELD ONCHANGE
     const handlePasswordChange = (e) => {
      const value = e.target.value;
      setPassword(value);
      setIsButtonDisabled(email.trim() === '' || value.trim() === '');
  };


  const onSignUpWithForm = (e) => {
    e.preventDefault();
    register({
      email: e.target[3].value,
      password: e.target[4].value,
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      country: e.target[2].value,
      type: AccountType,
    });

    // let firstName = e.target[0].value
    // let lastName = e.target[1].value
    // let country = e.target[2].value
    // let emailAddress = e.target[3].value
    // let password = e.target[4].value
    // console.log(firstName, lastName, country, emailAddress, password,type);
  };

  const selectCountry = (country) => {
    setCountry(country);
    setShowCountryList(false);
  };
  // your forehead.

  const onInputPress = (e) => {
    if (showCountryList === false) {
      setShowCountryList(true);
    }
  };

  if (AccountType !== "") {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex p-4">
        <div className="bg-white sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex items-center">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-full flex-1 mt-6 flex flex-col justify-center">
                {/* GOOGLE LOGIN */}
                {/* <GoogleLogin
                    clientId={VITE_CLIENT_ID}
                    buttonText="Sign up with Google"
                    onSuccess={null}
                    onFailure={null}
                    cookiePolicy="single_host_origin"
                    className={`max-w-xs w-full flex items-center justify-center`}
                  /> */}
              </div>
              {/* <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign up with e-mail
                  </div>
                </div> */}
              <form method="POST" onSubmit={(e) => onSignUpWithForm(e)}>
                <div className="mx-auto max-w-sm">
                  <div>
                    <a href="/">
                      <h1 className="text-2xl cursor-pointer font-bold justify-start flex  mb-24">
                        Dev<span className="text-blue-600 ">Tray</span>
                      </h1>
                    </a>
                  </div>
                  <h1 className="text-2xl xl:text-3xl font-semibold leading-loose">
                    {" "}
                    Get started for free
                  </h1>
                  <div className="w-full flex text-sm mt-2 mb-8">
                    <p className="font-semibold">Already have an account?</p>
                    <Link
                      to="/signin"
                      className="font-bold text-sm text-gray-600 no-underline"
                    >
                      <span className="ml-2 text-blue-600">Sign in.</span>
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row items-center md:space-x-3 w-full">
                    <div className="flex flex-col flex-1 space-y-2 w-full">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-white border-2 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="flex flex-col flex-1 space-y-2 w-full">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-white border-2 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full space-y-2 relative">
                    <div className="flex items-center">
                      <input
                        ref={countryInput}
                        onInput={(e) => onInputPress(e)}
                        value={country.name}
                        onChange={(e) =>
                          setCountry((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-8 py-4 rounded-lg font-medium bg-white border-2 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        required
                        type="text"
                        name="country"
                        placeholder="Select your country"
                      />
                      <h1 className="text-2xl px-4 opacity-40 border-l">
                        {country.flag || "?"}
                      </h1>
                    </div>

                    {showCountryList && (
                      <div className="w-full z-20 border-2 overflow-y-auto max-h-[200%] overflow-hidden bg-white absolute top-[100%] left-0">
                        <ul className="w-full h-full p-4 flex flex-col space-y-5 ">
                          {SUPPORTED_COUNTRIES.map((country, index) => {
                            return (
                              <li
                                key={`${index}`}
                                onClick={(e) => selectCountry(country)}
                                className="cursor-pointer text-gray-500 flex items-center justify-between"
                              >
                                <p className="text-gray-500 font-medium">
                                  {country.name}
                                </p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="w-4 h-4 text-gray-300"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                  />
                                </svg>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      className="w-full px-10 py-4 rounded-lg font-medium bg-white border-2 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <p className="text-sm text-red-500">
                    {emailError ? 'Invalid Email' : ''}
                  </p>
                  <div className="flex flex-row justify-between mt-4">
                    <div className="relative flex-grow">
                      <input
                        className="w-[100%] px-10 py-4 rounded-lg font-medium bg-white border-2 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white pl-10 pr-10"
                        placeholder="Password"
                        required
                        type={`${hidePassword ? "password" : "text"}`}
                        value={password}
                        onChange={handlePasswordChange}
                      />

                      {hidePassword && (
                        <HiOutlineEyeOff
                          size={"18"}
                          className="text-gray-400 cursor-pointer absolute flex items-center justify-center right-4 top-0 h-full"
                          onClick={onHidePassword}
                        />
                      )}
                      {showPassword && (
                        <HiOutlineEye
                          size={"18"}
                          className="text-gray-400 absolute flex items-center justify-center right-4 top-0 h-full"
                          onClick={onShowPassword}
                        />
                      )}
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    {loading ? (
                      <LoadingIcon />
                    ) : (
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                    )}

                    <span className="ml-3">Sign Up</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Image render */}
          <div
            className="flex-1 bg-indigo-100 text-center hidden bg-cover lg:flex"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
            }}
          >
            <div className="m-12 xl:m-16 w-full bg-contain bg-center justify-center items-center flex bg-no-repeat">
              {/* <img src={student} /> */}
            </div>
          </div>
        </div>
        <div
          onClick={() => setShowCountryList(false)}
          className={`${showCountryList ? "flex" : "hidden"
            } bg-black bg-opacity-0 flex-1 absolute top-0 left-0 w-full h-full z-10`}
        ></div>
      </div>
    );
  }

  return <SignupOptions setAccountType={setAccountType} />;
}
