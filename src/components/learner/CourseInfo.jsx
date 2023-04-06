import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function CourseInfo() {
    return (
        <div className="flex-1 flex flex-col">
            <div className="flex items-center space-x-3 text-gray-400 my-3  text-sm">
                <Link to="/dashboard/overview"  >Dashboard</Link>
                <p>/</p>
                <Link to="/dashboard/courses">Courses</Link>
                <p>/</p>
                <Link to="/dashboard/course/47833843">Robotics II</Link>
            </div>

            <div className='flex flex-col space-y-5'>
                <h1 className="text-2xl">Robotics II</h1>
                <div className="h-[200px] bg-gray-300 relative bg-center rounded" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')` }}>
                    <div className="flex absolute bottom-0 p-3 bg-black w-full bg-opacity-10 bg-backdrop-lg">
                        <div className="bg-white px-5 py-2 rounded-full flex items-center space-x-3 text-sm">
                            <h3>Instructor Name</h3>
                            <button title="Verified Instructor">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-600">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-8 border-b border-gray-100 text-gray-400">
                        <NavLink to="summary" className={({isActive})=> isActive ? "text-blue-500 border-b-4":''}>Summary</NavLink>
                        <NavLink to="lessons" className={({isActive})=> isActive ? "text-blue-500 border-b-4":''}>Lessons</NavLink>
                        <NavLink to="exercises" className={({isActive})=> isActive ? "text-blue-500 border-b-4":''}>Exercises</NavLink>
                        <NavLink to="qna" className={({isActive})=> isActive ? "text-blue-500 border-b-4":''}>Q&A</NavLink>
                    </div>
                </div>
            </div>

            <>
            <Outlet/>
            </>

        </div>
    )
}
