import React from 'react'

export default function Channel() {
    return (
        <div className="flex flex-1 space-x-5">
            <div className='flex-1  py-10 flex flex-col space-y-5'>
                <h3>Current Feed</h3>
                {/* <video className='h-80 w-full' controls>
                    <source  />
                </video> */}
                <div className='h-80 w-full bg-white shadow border border-gray-100 flex items-center justify-center cursor-pointer'>

                    <div className='flex-col'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l8.735 8.735m0 0a.374.374 0 11.53.53m-.53-.53l.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 010 5.304m2.121-7.425a6.75 6.75 0 010 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 01-1.06-2.122m-1.061 4.243a6.75 6.75 0 01-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12z" />
                        </svg>
                        <p className='text-gray font-light'>There is no feed at the moment.</p>
                        <p className='text-gray font-light'>Try again another time.</p>
                    </div>

                </div>
            </div>
            <div className="w-1/3 py-10 flex flex-col space-y-5">
                <h3>Upcoming Events</h3>
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 bg-blue-50 py-5 px-3">
                        <div className="bg-blue-500 w-14 h-14 rounded-full text-white font-bold text-sm text-center flex flex-col items-center justify-center">
                            <h4>30</h4>
                            <p className="text-xs font-light">March</p>
                        </div>
                        <div>
                            <h3 className="capitalize text-lg font-semibold">Introduction to computers</h3>
                            <p className='text-xs text-blue-500 font-light'>Starts at <span className="">12:00 pm</span></p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-blue-50 py-5 px-3">
                        <div className="bg-blue-500 w-14 h-14 rounded-full text-white font-bold text-sm text-center flex flex-col items-center justify-center">
                            <h4>30</h4>
                            <p className="text-xs font-light">March</p>
                        </div>
                        <div>
                            <h3 className="capitalize text-lg font-semibold">Introduction to computers</h3>
                            <p className='text-xs text-blue-500 font-light'>Starts at <span className="">12:00 pm</span></p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-blue-50 py-5 px-3">
                        <div className="bg-blue-500 w-14 h-14 rounded-full text-white font-bold text-sm text-center flex flex-col items-center justify-center">
                            <h4>30</h4>
                            <p className="text-xs font-light">March</p>
                        </div>
                        <div>
                            <h3 className="capitalize text-lg font-semibold">Introduction to computers</h3>
                            <p className='text-xs text-blue-500 font-light'>Starts at <span className="">12:00 pm</span></p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-blue-50 py-5 px-3">
                        <div className="bg-blue-500 w-14 h-14 rounded-full text-white font-bold text-sm text-center flex flex-col items-center justify-center">
                            <h4>30</h4>
                            <p className="text-xs font-light">March</p>
                        </div>
                        <div>
                            <h3 className="capitalize text-lg font-semibold">Introduction to computers</h3>
                            <p className='text-xs text-blue-500 font-light'>Starts at <span className="">12:00 pm</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
