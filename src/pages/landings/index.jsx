import React from "react";
import { Link } from "react-router-dom";



export default function Landings() {
    return (
        <div className="flex-1 w-screen bg-white">
            {/* header bar */}
            <header className="py-10">
                <div className="container flex items-center mx-auto">
                    <div className="flex-1 justify-center ml-5">
                        <Link to={"/"}>
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-gray-300 mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                    />
                                </svg>
                                <h1 className="text-2xl font-bold cursor-pointer">
                                    i<span className="text-blue-600 ">Learn</span>{" "}
                                </h1>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-row space-x-5 items-center font-medium">
                        <div className="flex items-center hidden md:flex">
                            <div className="flex items-center space-x-12 pr-5 font-medium">
                                <Link to="/quiz">Quiz Room</Link>
                                <Link to="/join-logic-labs">Join Logic Labs</Link>
                                <Link to="/about">About</Link>
                            </div>
                        </div>

                        <Link to="/donate" className="md:flex hidden">
                            <button className="bg-blue-500 px-10 shadow py-2 rounded text-white">
                                Donate
                            </button>
                        </Link>
                        <Link to="/login" className="md:flex hidden">
                            <button className="bg-white border border-gray-100 px-10 shadow py-2 rounded">
                                Login
                            </button>
                        </Link>
                        <Link to="/login" className="md:hidden">
                            <button className="bg-white  px-10 py-2 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* hero section */}
            <div className="container mx-auto flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-10 my-10 items-center">
                <div className="w-full md:w-1/3 shrink-0 px-5 py-10 md:py-0 md:px-0">
                    <h3 className="text-[30px] md:text-[50px] font-bold leading-relaxed">
                        Learn to <span className="text-blue-500">code _\</span> with our
                        amazing instructors.
                    </h3>
                    <div className="flex items-center space-x-3 mt-4 font-medium">
                        <button className="bg-blue-600 py-2 px-10 rounded-full text-white border">
                            {" "}
                            Join now{" "}
                        </button>
                        <Link to="/sponsor-logic-labs">
                            <button className="bg-white border-blue-600 px-3  shadow text-blue-600 py-2 flex-1 rounded-full text-white border">
                                {" "}
                                Become Sponsor{" "}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full flex-col space-y-5 hidden md:flex">
                    <div className="flex items-center space-x-5">
                        <div className="h-[230px] w-1/2 bg-gray-100 rounded-md"></div>
                        <div className="h-[230px] w-1/2 bg-gray-100 rounded-md"></div>
                    </div>
                    <div className="flex items-center space-x-5">
                        <div className="h-[230px] w-1/2 bg-gray-100 rounded-md"></div>
                        <div className="h-[230px] w-1/2 bg-gray-100 rounded-md"></div>
                    </div>
                </div>
            </div>

            {/* teams section */}
            <div className="h-[200px] bg-gray-100 flex space-x-5 flex-row items-center overflow-x-auto p-5  mb-10">
                <div className="bg-white h-full md:w-[400px] w-[300px] shrink-0 rounded-md bg-purple-400"></div>
                <div className="bg-white h-full md:w-[400px] w-[300px] shrink-0 rounded-md bg-green-400"></div>
                <div className="bg-white h-full md:w-[400px] w-[300px] shrink-0 rounded-md bg-yellow-400"></div>
                <div className="bg-white h-full md:w-[400px] w-[300px] shrink-0 rounded-md bg-red-400"></div>
                <div className="bg-white h-full md:w-[400px] w-[300px] shrink-0 rounded-md bg-blue-400"></div>
            </div>

            {/* what we do */}
            <div className="flex flex-col md:flex-row  items-center container mx-auto space-x-0 md:space-x-10 space-y-5 md:space-y-3 md:space-y-0 py-10 px-5 md:px-0">
                <div className="w-full md:w-1/3 bg-gray-100 h-[220px] rounded-md"></div>
                <div className="flex-1 flex flex-col space-y-3">
                    <div>
                        <h3 className="text-gray-900 font-bold text-2xl">Our Motivation</h3>
                        <h4 className="text-gray-900 font-medium text-lg">
                            The reason why we do what we do
                        </h4>
                    </div>
                    <p className="text-gray-500">
                        Our mission is to develop critical thinking skills in kids by
                        training them with a kids-friendly approach to computer programming.
                        We believe the average kid can be able to understand how codes work
                        and with that, solve problems to make a change.
                    </p>
                    <Link to="/" className="flex items-center space-x-4">
                        <p>Read more</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* our programs */}
            <div className="border-t border-gray-100 flex flex-col space-y-10 py-10 my-10">
                <div className="text-center">
                    <h3 className="text-gray-900 font-bold text-2xl">Our Program</h3>
                    <h4 className="text-gray-400 font-ligth text-lg mt-1">
                        Active Coding Programs
                    </h4>
                </div>
                <div className="flex items-center md:justify-center space-x-10 overflow-x-auto px-5 md:px-0">
                    <img
                        alt="image-one"
                        src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                        }
                        className="h-[50px] md:h-[80px]"
                    />
                    <img
                        alt="image-two"
                        src={
                            "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-html-markup-develop-layout-language-512.png"
                        }
                        className="h-[50px] md:h-[80px]"
                    />
                    <img
                        alt="image-three"
                        src={
                            "https://cdn.freebiesupply.com/logos/large/2x/python-3-logo-png-transparent.png"
                        }
                        className="h-[50px] md:h-[80px]"
                    />
                    <img
                        alt="image-four"
                        src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Scratchlogo.svg/512px-Scratchlogo.svg.png"
                        }
                        className="h-[50px] md:h-[80px]"
                    />
                    <img
                        alt="image-four"
                        src={
                            "https://logowik.com/content/uploads/images/arduino5804.jpg"
                        }
                        className="h-[50px] md:h-[80px]"
                    />
                </div>
            </div>

            {/* footer */}
            <div className="border-t py-10 w-full">

                <div className="container mx-auto flex-col space-y-10 px-10 md:px-0">
                    <div className=" flex md:flex-row flex-col space-y-5 md:space-y-0 md:items-center">
                        {/* logo column */}
                        <div className="flex flex-col space-y-5 md:w-2/6">
                            <Link to={"/"}>
                                <h1 className="font-bold text-blue-600 text-2xl leading-relaxed">
                                    <span>{"<"}Logic </span>
                                    <span className="text-black">Labs{"/>"}</span>
                                </h1>
                            </Link>
                            <div className="space-y-2 text-sm font-light text-gray-500 mt-5">
                                <p>Greater Heights School</p>
                                <p>West Fijai, Takoradi</p>
                                <p>(0) 50-934-3841</p>
                                <p>logickidsteam@gmail.com</p>
                            </div>
                        </div>
                        {/* service column */}
                        <div className="flex flex-col space-y-3 md:w-1/5">
                            <h3 className="font-medium">Services</h3>
                            <div className="space-y-2 text-sm font-light text-gray-500 mt-5">
                                <p>Greater Heights School</p>
                                <p>West Fijai, Takoradi</p>
                                <p>(0) 50-934-3841</p>
                                <p>logickidsteam@gmail.com</p>
                            </div>
                        </div>
                        {/* service column */}
                        <div className="flex flex-col space-y-3 md:w-2/5">
                            <h3 className="font-medium">Faqs</h3>
                            <div className="space-y-2 text-sm font-light text-gray-500 mt-5">
                                <p>Greater Heights School</p>
                                <p>West Fijai, Takoradi</p>
                                <p>(0) 50-934-3841</p>
                                <p>logickidsteam@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-3 md:w-1/5">
                            <h3 className="font-medium">Useful links</h3>
                            <div className="space-y-2 text-sm font-light text-gray-500 mt-5">
                                <p>Greater Heights School</p>
                                <p>West Fijai, Takoradi</p>
                                <p>(0) 50-934-3841</p>
                                <p>logickidsteam@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    {/* copyright */}
                    <div className="text-sm text-center md:text-left font-bold">
                        <p>Copyright &copy; {new Date().getFullYear()} Logic Labs</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

