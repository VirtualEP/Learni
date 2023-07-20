import React, { useRef, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { API_ROUTES, useServerHook } from '../../hooks/useServerHook'
import LoadingBar from 'react-top-loading-bar'
export default function CourseInfo() {
    const containerRef = useRef()

    const location = useLocation()

    const [courseData, setcourseData] = useState()


    const { getSingleCourses } = useServerHook()

    useEffect(() => {
        if (location.state) {
            setcourseData(location.state)
        }
    }, [location])


    return (
        <>


            <div ref={containerRef} className="flex-1 flex flex-col overflow-y-auto">
                <div className="flex items-center space-x-3 text-gray-400 mb-10  text-sm ">
                    <Link to="/dashboard/courses"  >Dashboard</Link>
                    <p>/</p>
                    <Link to="/dashboard/courses">Courses</Link>
                    <p>/</p>
                    <button>{courseData?.title}</button>
                </div>

                <div className='flex flex-col space-y-5 '>
              
                    <div className="h-[200px] md:h-[350px] bg-gray-300 relative bg-center bg-cover rounded" style={{ backgroundImage: `url('${API_ROUTES + '/' + courseData?.cover}')` }}>
                        <div className="absolute flex top-0 left-0 w-full h-full flex-1 bg-gray-200">
                            <img src={API_ROUTES + '/' + courseData?.cover} className='w-full h-full' />
                        </div>
                        <div className="flex items-center space-x-2 absolute bottom-0 p-3  w-full bg-opacity-10 bg-backdrop-lg" style={{ background: 'linear-gradient(to top, rgba(0,0,0,.75),transparent)' }}>
                            <div className="bg-white px-5 py-2 rounded-full flex items-center space-x-3 text-sm bg-opacity-95">
                                <h3>{courseData?.author?.firstName + ' ' + courseData?.author?.lastName}</h3>
                                <button title="Verified Instructor">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-600">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <button

                                onClick={(e) => {
                                    window.location = 'mailto:' + courseData?.author?.email
                                    e.preventDefault();
                                }}
                                className=" bg-white h-8 w-8 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center space-x-8 border-b border-gray-100 text-gray-400">
                            <NavLink to="summary" className={({ isActive }) => isActive ? "text-blue-500 border-b-4 border-blue-500" : ''}>Summary</NavLink>
                            {/* <NavLink to="channel" className={({ isActive }) => isActive ? "text-blue-500 border-b-4 border-blue-500" : ''}>Channel</NavLink> */}
                            <NavLink state={courseData} to="lessons" className={({ isActive }) => isActive ? "text-blue-500 border-b-4 border-blue-500" : ''}>Lessons</NavLink>
                            {/* <NavLink to="exercises" className={({ isActive }) => isActive ? "text-blue-500 border-b-4 border-blue-500" : ''}>Exercises</NavLink> */}
                            {/* <NavLink to="qna" className={({ isActive }) => isActive ? "text-blue-500 border-b-4 border-blue-500" : ''}>Q&A</NavLink> */}
                        </div>
                    </div>
                </div>

                <>
                    <Outlet />
                </>

            </div>
        </>
    )
}
