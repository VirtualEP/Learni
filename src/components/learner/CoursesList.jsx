import React, { useEffect, useState } from 'react'
import MyCourseCard from './MyCourseCard'
import { useAuthContext } from '../../context/Auth'
import CreateCourse from '../instructor/CreateCourse'
import { AnimatePresence } from 'framer-motion'
import { useServerHook } from '../../hooks/useServerHook'
import _ from 'lodash'


export default function CoursesList() {

    const [courses, setCourses] = useState([])
    const [showCreateCourse, setShowCreateCourse] = useState(false)
    const [loading, setLoading] = useState(false)
    const { getMyCourses } = useServerHook()

    const { user } = useAuthContext()

    useEffect(() => {
        setLoading(true);
        getMyCourses().then(response => {
            if (user.user.accountType === 'learner') {
                setCourses(response.data.enrollments);
            }
            if (user.user.accountType === 'instructor') {
                setCourses(response.data.courses);
            }
        }).finally(() => setLoading(false))


    }, [])


    return (
        <div className="flex-1  relative flex flex-col overflow-hidden">
            <div className="flex-1 flex flex-col overflow-y-auto ">
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

                <div className=" my-10 flex space-x-2 items-center">
                    <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
                    {
                        loading &&
                        <svg className="animate-spin  h-5 w-5  text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                </div>

                {!loading && !courses.length && <div className="bg-blue-100 text-blue-900 py-5 px-5">
                    <p>You currently have haven't enrolled yourself into any course yet.</p>
                </div>}

                <div className="h-[100%] flex-1 ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {courses.map((course,i) => ( <MyCourseCard item={course} key={`${i}-grid-course`} />))}
                    </div>
                    {/* {_.chunk(courses, 4).map((chunk, i) =>
                        <div key={'' + i + "-course"} className="min-h-[300px] flex items-center space-x-5 py-5">
                            {chunk.map((course, j) => <MyCourseCard item={course} key={`${i}-${j}-course`} />)}
                        </div>
                    )} */}
                </div>
            </div>

            {showCreateCourse &&
                <AnimatePresence>
                    <CreateCourse onClose={() => setShowCreateCourse(false)} />
                </AnimatePresence>
            }

        </div>
    )
}
