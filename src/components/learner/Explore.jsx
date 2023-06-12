import React, { useEffect, useState } from 'react'
import ExploreCard from './ExploreCard'
import ExploreInfo from './ExploreInfo'
import { useServerHook } from '../../hooks/useServerHook'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'



export default function Explore() {

    const [selectedCourse, setSelectedCourse] = useState()

    const [courses, setCourses] = useState([])
    const [popularTags, setPopularTags] = useState([])
    const [loading, setLoading] = useState(false)

    const [selectedTag, setSelectedTag] = useState('')

    const location = useLocation()



    const { getExplores, searchByTag } = useServerHook()

    useEffect(() => {
        if (location.state) {
            setSelectedCourse(location.state.selected)
            setCourses(location.state.exploreCourses.courses)
            setPopularTags(location.state.exploreCourses.tags)
            return
        } else {
            setLoading(true)
            getExplores().then(({ data }) => {
                setPopularTags(data.tags)
                setCourses(data.courses)
            }).finally(() => setLoading(false))
        }

    }, [location])


    useEffect(() => {
        setLoading(true)
        searchByTag(selectedTag).then(({ data }) => {
            setCourses(data.courses)
        }).finally(() => setLoading(false))
    }, [selectedTag])



    return (
        <div className="flex-1 flex border-t -mx-5 overflow-hidden flex-col md:flex-row">
            <div className="md:w-1/2 border-r bg-white-50 flex overflow-hidden flex-col space-y-3 border-gray-100 px-5">
                <div className="md:flex flex-row items-center space-x-2 hidden">
                    <h1 className="text-2xl pt-5 font-bold">Explore Courses</h1>

                </div>
                <div className="md:flex hidden items-center flex-row py-3 w-full space-x-4 overflow-x-auto hide-scrollbar">
                    {
                        selectedTag ?
                            <div className="flex items-center">
                                <button onClick={() => setSelectedTag('')} key={`explore-course`} className="bg-blue-400 text-white px-5 py-1 rounded-md w-full flex items-center space-x-2">
                                    <p>{selectedTag}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                </button>
                            </div>
                            : <>
                                {
                                    popularTags.map((data, index) => <button onClick={() => setSelectedTag(data.tag)} key={`explore-course-${index}`} className="bg-gray-100 text-gray-600 px-5 py-1 rounded w-full">{data.tag}</button>)
                                }
                            </>
                    }
                </div>
                <div className="flex-1 overflow-hidden space-y-8 overflow-y-auto h-full">
                    <div className="flex flex-row items-center space-x-2 md:hidden">
                        <h1 className="text-2xl pt-5 font-bold">Explore Courses</h1>

                    </div>
                    <div className="flex md:hidden items-center flex-row touch-auto py-3 w-full space-x-4 overflow-x-auto hide-scrollbar ">
                        {
                            selectedTag ?
                                <div className="flex items-center">
                                    <button onClick={() => setSelectedTag('')} key={`explore-course`} className="bg-blue-400 text-white px-5 py-1 rounded-md w-full flex items-center space-x-2">
                                        <p>{selectedTag}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </button>
                                </div>
                                : <>
                                    {
                                        popularTags.map((data, index) => <button onClick={() => setSelectedTag(data.tag)} key={`explore-course-${index}`} className="bg-gray-100 text-gray-600 px-5 py-1 rounded w-full">{data.tag}</button>)
                                    }
                                </>
                        }
                    </div>
                    {loading && <div className="w-full flex flex-col items-center justify-center">
                        <svg className="animate-spin  h-5 w-5  text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="text-center text-sm text-gray-400 font-medium mt-2">Please wait...</p>
                    </div>}
                    {courses.map((d, i) => <ExploreCard onClick={() => setSelectedCourse(d)} data={d} key={'explore-' + i} />)}
                    <div className="py-5"></div>
                </div>
            </div>
            <AnimatePresence
                initial={{ opacity: 0 }}
            >
                {selectedCourse &&
                    <motion.div initial={{ translateY: '100vh', opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: '100vh', opacity: 0 }} className="md:w-1/2 flex absolute md:relative top-[10%] md:top-0 md:h-[100%] w-full h-[90%] md:hidden  bg-white">

                        <div className="relative flex flex-col flex-1">
                            {selectedCourse ? <ExploreInfo data={selectedCourse} /> :
                                <div className="flex flex-1 items-center flex-col justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 text-gray-200 h-20">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                    <h3 className="text-xl text-gray-600">Nothing Selected</h3>
                                    <p className="text-sm font-thin text-gray-400">Select a course to show more information.</p>
                                </div>}
                            <button onClick={() => setSelectedCourse(null)} className="bg-gray-400 md:hidden flex absolute right-6 -top-12 items-center justify-center rounded-full text-white h-10 w-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
            <div className="md:w-1/2 md:flex absolute md:relative top-[10%] md:top-0 md:h-[100%] w-full h-[90%] hidden  bg-white">

                <div className="relative flex flex-col flex-1">
                    {selectedCourse ? <ExploreInfo data={selectedCourse} /> :
                        <div className="flex flex-1 items-center flex-col justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 text-gray-200 h-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                            <h3 className="text-xl text-gray-600">Nothing Selected</h3>
                            <p className="text-sm font-thin text-gray-400">Select a course to show more information.</p>
                        </div>}
                    <button onClick={() => setSelectedCourse(null)} className="bg-blue-200 md:hidden flex absolute right-6 -top-12 items-center justify-center rounded-full text-white h-10 w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    )
}


