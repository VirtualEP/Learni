import React, { useRef, useState } from 'react'
import MyCourseCard from './MyCourseCard'
import { useAuthContext } from '../../context/Auth'
import CreateCourse from '../instructor/CreateCourse'
import { AnimatePresence } from 'framer-motion'

const APPLIED_COURSES = [
    {
        _id: "830984394",
        name: 'Chemistry 102',
        cover: 'https://images.unsplash.com/photo-1655720855348-a5eeeddd1bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
        price: 59.99,
        icon: '',
        lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    {
        _id: "3289736223",
        name: 'Calculus II',
        cover: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        price: 59.99,
        icon: '',
        lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    {
        _id: "390902387",
        name: 'Physics II',
        cover: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        price: 59.99,
        icon: '',
        lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    {
        _id: "43934782230",
        name: 'Robotics',
        cover: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        price: 59.99,
        icon: '',
        lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
]


export default function CoursesList() {

    const [courses, setCourses] = useState(APPLIED_COURSES)
    const [showCreateCourse, setShowCreateCourse] = useState(false)

    const { user } = useAuthContext()


    return (
        <div className="flex-1 relative">
            <>
                {user?.user?.accountType === 'instructor' ? <div className="flex flex-row space-x-3">
                    <button onClick={e => setShowCreateCourse(true)} className='flex items-center space-x-2 bg-white border border-gray-100 py-3 px-3 text-gray-500 font-medium rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>

                        <p>Create Course</p>
                    </button>
                    <button className='flex items-center space-x-2 bg-gray-200 border border-gray-100 py-3 px-3 text-gray-500 font-medium rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>

                        <p>Stream Session</p>
                    </button>
                </div> : <></>
                }
            </>
   
            <div className=" my-10">
                <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
            </div>
            <div className="h-1/3 flex space-x-5">
                {courses.map((item, index) => <MyCourseCard item={item} key={index} />)}
            </div>

            {showCreateCourse &&
                <AnimatePresence>
                    <CreateCourse onClose={() => setShowCreateCourse(false)} />
                </AnimatePresence>
            }

        </div>
    )
}
