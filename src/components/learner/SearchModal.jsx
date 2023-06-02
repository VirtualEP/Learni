import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useServerHook } from '../../hooks/useServerHook'
import { useNavigate } from 'react-router-dom'


export default function SearchModal({ close }) {

    const [seachQuery, setSeachQuery] = useState('')
    const inputRef = React.useRef()
    const { searchByName, searchEnrolled } = useServerHook();
    const navigate = useNavigate()

    const [mycourses, setMycourses] = useState({ loading: true, courses: [] })

    const [exploreCourses, setExploreCourses] = useState({ loading: true, courses: [] })

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    useEffect(() => {
        if (seachQuery.length > 0) {
            // search by name
            setMycourses(prev => ({ ...prev, loading: true }))
            setExploreCourses(prev => ({ ...prev, loading: true }))

            searchByName(seachQuery).then(data => {
                setExploreCourses(prev => ({ ...prev, courses: data.data.courses, tags: data.data.tags }))
            }).finally(() => {
                setExploreCourses(prev => ({ ...prev, loading: false }))
            })

            // search
            searchEnrolled(seachQuery).then(data => {
                setMycourses(prev => ({ ...prev, courses: data.data.courses }))

            }).finally(() => {
                setMycourses(prev => ({ ...prev, loading: false }))
            })
        }
    }, [seachQuery])

    return (
        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="bg-black flex justify-center absolute top-0 left-0 bg-opacity-10 w-screen h-screen">
            <div className="md:w-1/5 flex flex-col"></div>
            <div className="flex-1 py-6 px-5 flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                    <div className="flex bg-white items-center rounded-lg md:w-2/4 overflow-hidden space-x-2 px-3 py-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>

                        <input
                            value={seachQuery}
                            onChange={e => setSeachQuery(e.target.value)}
                            ref={inputRef}
                            placeholder="courses , lessons and videos"
                            className="bg-white w-full focus:ring-0 focus:outline-0"
                            type="text"
                        />
                    </div>
                    <button onClick={close} className="bg-white h-full w-10 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className=" bg-white p-10 rounded-md md:w-2/4 min-h-20 flex flex-col space-y-5">
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-sm text-gray-500">My Courses</h3>
                        <div className="flex flex-col space-y-3">
                            {mycourses.loading ?
                                <div className="flex items-center justify-between cursor-pointer">
                                    <div className="w-full flex flex-col space-y-2">
                                        <div className="bg-gray-200 rounded h-4 w-full animate-pulse" />
                                        <div className="flex items-center space-x-1">
                                            <div className="bg-gray-200 rounded h-4 w-1/3 animate-pulse" />
                                            <div className="bg-gray-200 rounded  h-4 w-4 shrink-0 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                                :
                                <>
                                    {mycourses.courses.map((data, index) => <div
                                    onClick={()=>{
                                        console.log(data);
                                        navigate('/dashboard/courses/'+data._id+'/summary',{state:{...data}})
                                        close()
                                    }}
                                    key={`mycourse-search-` + index} className="flex items-center justify-between cursor-pointer">
                                        <h4 className="text-gray-700 font-medium">{data.title}</h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-200">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>

                                    </div>)}
                                    {mycourses.courses.length < 1 && <p className="text-gray-400 font-light text-sm">No data found.</p>}

                                </>
                            }
                        </div>
                    </div>
                    <div className="border-t border-gray-100"></div>
                    <div className="flex flex-col space-y-3">
                        <h3 className="text-sm text-gray-500">Explore Courses</h3>
                        <div className="flex flex-col space-y-5">
                            {!exploreCourses.loading ?
                                <>
                                    {
                                        exploreCourses.courses.map((data, index) => <div onClick={e => {
                                            navigate('/dashboard/explore', { state: { exploreCourses, selected: data } })
                                            close()
                                        }} key={`explore-search-` + index} className="flex items-center justify-between cursor-pointer">
                                            <div>
                                                <h4 className="text-gray-700 font-medium">{data.title}</h4>
                                                <div className="flex items-center space-x-1">
                                                    <p className="text-xs font-medium text-blue-600">
                                                        {data.author.firstName + " " + data.author.lastName}
                                                    </p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-blue-600">
                                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-200">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>

                                        </div>)

                                    }

                                    {exploreCourses.courses.length < 1 && <p className="text-gray-400 font-light text-sm">No data found.</p>}
                                </>
                                :
                                <div className="flex items-center justify-between cursor-pointer">
                                    <div className="w-full flex flex-col space-y-2">
                                        <div className="bg-gray-200 rounded h-4 w-full animate-pulse" />
                                        <div className="flex items-center space-x-1">
                                            <div className="bg-gray-200 rounded h-4 w-1/3 animate-pulse" />
                                            <div className="bg-gray-200 rounded  h-4 w-4 shrink-0 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
