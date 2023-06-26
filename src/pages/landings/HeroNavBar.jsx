import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

export default function HeroNavBar({dark}) {
    const navbar_links = useRef()
    const navbar_actions = useRef()

    const smToogleOptions = () => {
        navbar_links.current.classList.toggle('hidden');
        navbar_actions.current.classList.toggle('hidden');
    }

    return (
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row  md:items-center m-5 md:my-10 md:justify-between font-light mb-10">
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:space-x-10">

                <div className="flex items-center justify-between md:block">
                    <Link to={'/'} className="flex items-center md:justify-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-6 h-6 ${dark ? 'text-white' : 'text-black'}  mr-2`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                            />
                        </svg>
                        <h1 className={`text-2xl  font-bold cursor-pointer ${dark ? 'text-white' : 'text-black'}`}>
                            Dev<span className="text-blue-600 ">Tray</span>{" "}
                        </h1>
                        {/* MENU ITEMS */}
                    </Link>

                    <button onClick={smToogleOptions} className='bg-blue-500 p-2 text-white rounded-md md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>

                    </button>
                </div>

                <div ref={navbar_links} className={`flex md:flex  ${dark ? 'bg-gray-900' : 'bg-gray-200 font-semibold'}  md:bg-transparent rounded-lg p-3 flex-col space-y-5 md:space-y-0 md:flex-row md:items-center ${dark ? 'text-white' : 'text-black'} md:space-x-5`}>
                    <Link to="/dashboard/explore">Courses</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/changelog">Changelog</Link>
                </div>
            </div>
            <div ref={navbar_actions} className={`flex  md:flex items-center ${dark ? 'text-white' : 'text-black'} space-x-5`}>
                <Link className={`${dark ? 'bg-gray-900' : 'bg-gray-200 font-semibold'} px-10 py-2 rounded md:p-0 md:rounded-none md:bg-transparent`} to="/signin">Login</Link>
                <Link className={`${dark ? 'bg-white text-black' : 'bg-blue-600 text-white'}  font-bold px-8 py-2 rounded`} to="/signup">Sign up</Link>
            </div>
        </div>
    )
}
