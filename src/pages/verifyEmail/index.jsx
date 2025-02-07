import React from 'react'
import { Link } from 'react-router-dom'

export default function VerifyEmail() {
    return (
        <div className="w-screen h-screen md:bg-blue-600 flex items-center justify-center flex-col bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(https://images.unsplash.com/photo-1649336320659-f9f8da5ee1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`}}>
            <div className="bg-white p-10 md:w-2/6 max:h-3/5 min-h-[33rem] rounded-lg md:shadow-sm shadow-blue-100 flex flex-col space-y-5">
                <div>
                    <Link to="/dashboard/courses" className="flex items-center  py-4 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-6 h-6 text-black mr-2`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                            />
                        </svg>
                        <h1 className="text-2xl text-black font-bold cursor-pointer">
                            Dev<span className="text-blue-600 ">Tray</span>{" "}
                        </h1>
                        {/* MENU ITEMS */}
                    </Link>
                </div>
                <div className="flex flex-col space-y-5 text-md text-gray-500">
                    <h3 className="text-3xl text-black font-medium ">Verify your account</h3>
                    <p>Account activation link has been sent to the email address you provided.<span className="font-bold text-gray-900 ml-3">' penielnyinaku@gmail.com '</span></p>
                    
                </div>
                <div className="flex-1  flex items-center justify-center flex-col">

                    <div className="bg-blue-50 text-blue-600 p-5 rounded-lg animate animate-bounce relative">
                        <p className="absolute -top-3 -right-2 text-xs  bg-red-500 text-white p-2 font-bold w-8 h-8 rounded-full flex items-center justify-center">1</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="animate-pulse w-10 h-10 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>

                    </div>
                </div>
                <button className="text-blue-600 text-sm font-medium">Didn't get the email? Send it again</button>
            </div>
            
        </div>
    )
}
