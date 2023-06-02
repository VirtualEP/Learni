import React from 'react'
import { Link } from 'react-router-dom'
import numToCurrency from '../utils/numToCurrency'

export default function Courselo() {
    return (
        <>
            <div className="flex items-center justify-between py-5 container mx-auto">
                <h3 className="font-medium text-2xl">Courselo</h3>
                <div className="flex flex-row items-center text-gray-500 space-x-8 ">
                    <Link to="#">Home</Link>
                    <Link to="#">Courses</Link>
                    <Link to="#">Mentors</Link>
                    <Link to="#">About</Link>
                </div>
                <div className="flex flex-row items-center space-x-5">
                    <Link to="#">Sign In</Link>
                    <Link className='border rounded-full border-black px-5 py-2' to="#">Get Started</Link>
                </div>
            </div>

            <div className="min-h-[70vh] flex items-center bg-gray-50">
                <div className="flex-1 leading-loose">
                    <div className="p-10 w-5/6 flex flex-col space-y-3 mx-auto">
                        <div>
                            <h1 className="text-6xl text-left font-bold" style={{ lineHeight: '70px' }}>Get the best </h1>
                            <h1 className="text-6xl text-left font-bold" style={{ lineHeight: '70px' }}>of courses from world</h1>
                            <h1 className="text-6xl text-left font-bold" style={{ lineHeight: '70px' }}>class mentors</h1>
                        </div>
                        <p className="text-gray-400 font-light">get quality courses with the best price. Now you can get the  best course from us. we have a great mentors.</p>
                        <div className="py-5 flex items-center space-x-5">
                            <button className="bg-black w-1/4 py-2 text-white">Get Started</button>
                            <div className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                </svg>
                                <p>How it works ?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] relative min-h-[70vh] bg-red-400 bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80')` }}>

                    <div className="bg-yellow-300 w-36 min-h-24 flex flex-col py-2 items-center justify-center absolute -left-6 top-[50%] shadow rounded-md">
                        <p className="text-center font-bold text-gray-600">110+</p>
                        <p className="text-center text-xs text-gray-500">Top Mentors</p>
                        <div className="relative flex items-center mt-2">
                            <img className="h-6 w-6 rounded-full border-white border" src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" />
                            <img className="h-6 w-6 absolute left-5 rounded-full border-white border" src="https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80" />
                            <img className="h-6 w-6 absolute -left-5 rounded-full border-white border" src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
                        </div>
                    </div>

                    <div className="bg-blue-300 w-24 flex flex-col items-center justify-center h-24 absolute -left-20 top-[30%] shadow rounded-md px-3">
                        <p className="text-center font-bold text-gray-600">110K</p>
                        <p className="text-center text-xs text-gray-500">Active Students</p>
                    </div>

                </div>
            </div>

            <div className="container mx-auto py-10 flex flex-col space-y-3">
                <div className="w-40 bg-blue-500 p-1" />
                <div className="flex space-x-10 items-center">
                    <h3 className="font-medium text-xl text-gray-600" style={{ lineHeight: "30px" }}>Our trusted patneres & our proud investors accross the world</h3>
                    <div className="w-2/3  px-5 flex flex-row items-center space-x-10">
                        <img className="w-36 h-11" src="https://ttu.edu.gh/up-files/2022/08/Logo-1-e1676894575438-1024x362.png" />
                        <img className="w-60" src="https://ttu.edu.gh/up-files/2023/02/NAB.png" />
                        <img className="w-40" src={'data:image/png;base64,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'} />
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex space-x-5 my-10">
                <div className="w-1/3 flex items-center space-x-3 border border-gray-100 p-2 bg-white rounded-md">
                    <div className="h-16 w-20 shrink-0 bg-yellow-400 rounded-sm flex items-center justify-center">

                    </div>
                    <div>
                        <p className="text-sm font-bold mb-1">Best Instructor</p>
                        <p className="text-xs text-gray-400">we have highly skilled & highly experienced instructors accross the nation.</p>
                    </div>
                </div>

                <div className="w-1/3 flex items-center space-x-3 border border-gray-100 p-2 bg-white rounded-md">
                    <div className="h-16 w-20 shrink-0 bg-purple-400 rounded-sm flex items-center justify-center">

                    </div>
                    <div>
                        <p className="text-sm font-bold mb-1">Live Class</p>
                        <p className="text-xs text-gray-400">We offer live classes to give students the best education and experience.</p>
                    </div>
                </div>

                <div className="w-1/3 flex items-center space-x-3 border border-gray-100 p-2 bg-white rounded-md">
                    <div className="h-16 w-20 shrink-0 bg-blue-400 rounded-sm flex items-center justify-center">

                    </div>
                    <div>
                        <p className="text-sm font-bold mb-1">1 to 1 support</p>
                        <p className="text-xs text-gray-400">We give our students best support always & all time 24/7.</p>
                    </div>
                </div>

            </div>


            <div className="container mx-auto flex flex-col space-y-20 my-20 py-5">
                <div className="flex flex-col space-y-10">
                    <h2 className="text-center text-2xl font-bold">Our popular courses</h2>
                    <div className="flex text-sm items-center justify-between text-gray-500">
                        <button className='font-bold text-black'>Programing</button>
                        <button>Python</button>
                        <button>Graphic Design</button>
                        <button>Network Adminstration</button>
                        <button>Cyber Security</button>
                        <button>Web Design</button>
                        <button>Web Design</button>
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-5">
                    <div className="w-1/3 min-h-48 flex flex-col space-y-5 bg-white border p-2 rounded-md overflow-hidden">
                        <div className="h-40 bg-cover bg-center rounded-md overflow-hidden" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80')` }}>
                        </div>
                        <div className="p-2 flex flex-col space-y-2">
                            <p className="text-gray-400 capitalize text-xs">python</p>
                            <p className="font-medium text-lg">Introduction to python programing</p>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold">{numToCurrency.format(100)}</p>
                                <button className='bg-blue-400 text-[12px] text-white px-5 py-2 rounded-full font-medium'>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 min-h-48 flex flex-col space-y-5 bg-white border p-2 rounded-md overflow-hidden">
                        <div className="h-40 bg-cover bg-center rounded-md overflow-hidden" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80')` }}>
                        </div>
                        <div className="p-2 flex flex-col space-y-2">
                            <p className="text-gray-400 capitalize text-xs">python</p>
                            <p className="font-medium text-lg">Introduction to python programing</p>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold">{numToCurrency.format(100)}</p>
                                <button className='bg-blue-400 text-[12px] text-white px-5 py-2 rounded-full font-medium'>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 min-h-48 flex flex-col space-y-5 bg-white border p-2 rounded-md overflow-hidden">
                        <div className="h-40 bg-cover bg-center rounded-md overflow-hidden" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80')` }}>
                        </div>
                        <div className="p-2 flex flex-col space-y-2">
                            <p className="text-gray-400 capitalize text-xs">python</p>
                            <p className="font-medium text-lg">Introduction to python programing</p>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold">{numToCurrency.format(100)}</p>
                                <button className='bg-blue-400 text-[12px] text-white px-5 py-2 rounded-full font-medium'>Enroll Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="min-h-[50vh] flex items-center bg-gray-50">
                <div className="w-1/2"></div>
                <div className="w-1/2"></div>
            </div>

            <div className="min-h-[50vh] flex items-center bg-white">
                <div className="w-1/2"></div>
                <div className="w-1/2"></div>
            </div>


        </>
    )
}
