import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import HeroNavBar from '../landings/HeroNavBar';
import bgImage from './../../assets/illustration/bg.png';
import LandFooter from '../landings/Footer';

export default function PricingPage() {
    const navbar_links = useRef()
    const navbar_actions = useRef()

    const smToogleOptions = () => {
        navbar_links.current.classList.toggle('hidden');
        navbar_actions.current.classList.toggle('hidden');
    }
    return (

        <div className="flex flex-col">
            <div className="flex-1 flex pb-10 md:pb-0 md:min-h-[50vh]  min-h-[60vh] ">
                <div className="container mx-auto flex-1 flex flex-col z-10">
                    <HeroNavBar dark={false} />

                    {/* hero */}
                    <div className='flex flex-col md:flex-row items-center justify-center flex-1  space-x-10'>
                        <div className=' flex flex-col items-center space-y-5 px-3 md:px-0'>
                            <div className='md:h-20 ' />

                            <h3 className="text-5xl md:text-7xl text-black font-bold text-center">Get more with Devtray<span className='text-blue-600'>.</span>net</h3>
                            <p className="text-gray-500 font-bold  text-md text-center">Joing growing community and get peer insights and discover exciting opportunities and collaborations.</p>
                            <div className='h-10' />


                            <div className="bg-gray-200 text-sm rounded-full h-10 p-1 space-x-4">
                                <button className="bg-white h-full rounded-full px-5">Monthly</button>
                                <button className="px-5 text-gray-600 border-l border-l-gray-200">Annual (per Year)</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div className='w-screen min-h-[60vh] flex items-center justify-center my-10'>
                <div className='flex-1  h-full flex md:flex-row flex-col  items-center justify-center space-y-5 md:space-y-0 md:space-x-3'>
                    <div className='w-4/5 md:w-1/4 pb-5 h-full rounded-3xl  bg-white border shadow border-gray-200 '>
                        <div className='flex flex-row items-center justify-between p-5'>
                            <div className='w-12 h-12 border bg-white rounded-full shadow flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>



                            </div>
                            <div>
                                <h5 className='bg-blue-400 text-sm text-white px-4 py-1 rounded-full'>Free</h5>
                            </div>
                        </div>

                        <div className='p-5 flex flex-col space-y-2 border-b'>
                            <h2 className='text-2xl font-bold text-gray-600'>Free</h2>
                            <p className='text-gray-400 font-light text-sm'>Get live class feature with more exclusive features to enhace your learning experience.</p>
                            <div className='py-3'>
                                <h3 className='text-2xl font-extrabold text-blue-800'>₵0.00 <span className='text-sm text-gray-500 font-bold'> / month</span></h3>
                            </div>
                        </div>


                        <div className='p-5 flex flex-col space-y-2 text-gray-700'>
                            <div className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h4>Unlimited courses</h4>
                            </div>
                            <div className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h4>Unlimited uploads</h4>
                            </div>
                            <div className='flex space-x-2 text-red-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                                <h4>Live Courses</h4>
                            </div>
                            <div className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h4>Immersive Experience</h4>
                            </div>
                        </div>

                        <div className='px-5 h-full'>
                            <button className="bg-gray-200 p-2 w-full rounded font-medium">Get Started</button>
                        </div>
                    </div>
                    <div className='w-4/5 md:w-1/4 pb-5 h-full rounded-3xl bg-blue-600'>

                        <div className='flex flex-row items-center justify-between p-5'>
                            <div className='w-12 h-12 border bg-white rounded-full shadow flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>


                            </div>
                            <div>
                                <h5 className='bg-blue-400 text-sm text-white px-4 py-1 rounded-full'>Exclusive</h5>
                            </div>
                        </div>

                        <div className='p-5 flex flex-col space-y-2 border-b'>
                            <h2 className='text-2xl font-bold text-white'>Exclusive</h2>
                            <p className='text-white font-light text-sm'>Get live class feature with more exclusive features to enhace your learning experience.</p>
                            <div className='py-3'>
                                <h3 className='text-2xl font-extrabold text-white'>₵5.00 <span className='text-sm text-blue-100 font-bold'> / month</span></h3>
                            </div>
                        </div>


                        <div className='p-5 flex flex-col space-y-2 text-white'>
                            <div className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h4>All free features</h4>
                            </div>
                            <div className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h4>Verrified Badge</h4>
                            </div>
                            <div className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h4>Live Courses</h4>
                            </div>
                            <div className='flex space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h4>Immersive Experience</h4>
                            </div>
                        </div>

                        <div className='px-5 h-full'>
                            <button className="bg-blue-400 p-2 w-full rounded font-medium text-white">Get Started</button>
                        </div>

                    </div>

                </div>
            </div>

            <div className=''>
                <LandFooter />
            </div>


        </div>

    )
}
