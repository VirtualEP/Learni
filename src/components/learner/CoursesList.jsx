import React, { useEffect, useState } from 'react'
import MyCourseCard from './MyCourseCard'
import { useAuthContext } from '../../context/Auth'
import CreateCourse from '../instructor/CreateCourse'
import { AnimatePresence } from 'framer-motion'
import { API_ROUTES, useServerHook } from '../../hooks/useServerHook'
import _ from 'lodash'
import { Link, useNavigate } from 'react-router-dom'
import numToCurrency from '../../utils/numToCurrency'


export default function CoursesList() {

    const [courses, setCourses] = useState([])
    const [showCreateCourse, setShowCreateCourse] = useState(false)
    const [loading, setLoading] = useState(false)
    const { getMyCourses, getTopselling } = useServerHook()
    const [topSelling, setTopSelling] = useState({ courses: [], tags: [] })

    const navigate = useNavigate()

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
            if (response.data.enrollments.length < 1) {
                getTopselling()
                    .then(data => setTopSelling(data.data))
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



                {!loading && !courses.length &&

                    <div className="bg-blue-100/20 border backdrop-blur-2xl rounded text-blue-900 py-5 px-5 mb-10 flex flex-col space-y-5 font-light">
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-bold ">Welcome to <span>I</span><span>Learn</span></h3>
                            <p className="text-sm text-slate-400">Welcome to iLearn, where your learning journey begins! We're here to guide you through the first steps to help you get the most out of our platform. Follow these simple instructions to get started</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-baseline space-x-5">
                            <div className="lg:w-1/4 flex flex-col space-y-2">
                                <h3 className="font-medium text-sm">Step 1: Create Your Account</h3>
                                <p className="text-sm text-slate-400">create your iLearn account. Choose a unique username and a strong password to keep your account secure.</p>
                            </div>
                            <div className="lg:w-1/4 flex flex-col space-y-2">
                                <h3 className="font-medium text-sm">Step 2: Explore Course</h3>
                                <p className="text-sm text-slate-400">Once you've created your account, take some time to browser through our extensive range of course categories.</p>
                            </div>
                            <div className="lg:w-1/4 flex flex-col space-y-2">
                                <h3 className="font-medium text-sm">Step 3: Enroll in a Course</h3>
                                <p className="text-sm text-slate-400">Found a course that aligns with your learning objectives? Great!. Enroll in the course to gain access to its content.</p>
                            </div>
                            <div className="lg:w-1/4 flex flex-col space-y-2">
                                <h3 className="font-medium text-sm">Engage with the Course Content</h3>
                                <p className="text-sm text-slate-400">Once you've enrolled in a course, dive into the course content and explore the lessons, quizzes and resources provided by instructor.</p>
                            </div>
                        </div>
                        <div className="border-t pt-5 flex flex-col space-y-5">
                            <h3 className="text-sm font-bold">Best Sellers 🔥</h3>
                            <div className="flex flex-row items-center  overflow-x-auto  no-scrollbar space-x-4">
                                {topSelling.courses.map((course, index) =>
                                    <div
                                    onClick={e=>navigate('/dashboard/explore',{state:{exploreCourses:topSelling,selected:course }})}
                                    key={'top-seller-' + index} className="bg-white scale-90 md:scale-100 h-[300px] md:max-h-[250px] relative flex md:w-[500px] w-full shrink-0  rounded-md border border-gray-100">
                                        <div className="flex-1 flex aspect-square">
                                            <img className="flex-1"  src={API_ROUTES+'/'+course.cover} onError={e=>e.target.src='https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png'} />
                                        </div>
                                        <div className="absolute flex justify-between items-baseline bg-black/10 backdrop-blur-sm w-full p-3 bottom-0 left-0">
                                            <div>
                                                <h3 className="font-bold text-lg">{course.title}</h3>
                                                <div className="flex items-center space-x-2">
                                                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-gray-400">
                                                        <p className="font-medium text-xs">{course.author.firstName[0]+""+course.author.lastName[0]}</p>
                                                    </div>
                                                    <p className="font-medium text-sm">{course.author.firstName+" "+course.author.lastName}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="bg-blue-600 text-white px-5 text-xs font-medium  rounded-full py-2">Enroll {numToCurrency.format(course.price)}</button>
                                            </div>
                                        </div>
                                    </div>)}

                            </div>
                        </div>
                    </div>
                }

                <div className="h-[100%] flex-1 ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {courses.map((course, i) => (<MyCourseCard item={course} key={`${i}-grid-course`} />))}
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





