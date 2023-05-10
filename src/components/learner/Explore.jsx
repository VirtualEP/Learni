import React, { useEffect, useState } from 'react'
import ExploreCard from './ExploreCard'
import ExploreInfo from './ExploreInfo'
import { useServerHook } from '../../hooks/useServerHook'

const popularTags = [
    'python',
    'php',
    'html',
    'css',
    'javascript'
]

export default function Explore() {

    const [selectedCourse, setSelectedCourse] = useState()

    const [courses,setCourses] = useState([])
    const [loading, setLoading] = useState(false)

    const {getExplores} = useServerHook()

    useEffect(() => {
        setLoading(true)
        getExplores().then(({data}) => {
            setCourses(data.courses)
        }).finally(()=>setLoading(false))

    }, [])
    

    return (
        <div className="flex-1 flex border-t -mx-5  -mb-5 overflow-hidden">
            <div className="w-1/2 border-r bg-white-50 flex overflow-hidden flex-col space-y-8 border-gray-100 px-5">
                <div className="flex flex-row items-center space-x-2">
                    <h1 className="text-2xl pt-5 font-bold">Explore Courses</h1>

                </div>
                <div className="flex items-center w-full space-x-4 overflow-x-auto">
                    {
                        popularTags.map((data, index) => <button key={`explore-course-${index}`} className="bg-gray-100 text-gray-600 px-5 py-1 rounded w-full">{data}</button>)
                    }
                </div>
                <div className="flex-1 overflow-hidden space-y-8 overflow-y-auto h-full">
                   {loading && <div className="w-full flex flex-col items-center justify-center">
                        <svg class="animate-spin  h-5 w-5  text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="text-center text-sm text-gray-400 font-medium mt-2">Please wait...</p>
                    </div>}
                    {courses.map((d, i) => <ExploreCard onClick={() => setSelectedCourse(d)} data={d} key={'explore-' + i} />)}
                </div>
            </div>
            <div className="w-1/2 flex flex-col">

                {selectedCourse ? <ExploreInfo data={selectedCourse} /> :
                    <div className="flex flex-1 items-center flex-col justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 text-gray-200 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                        <h3 className="text-xl text-gray-600">Nothing Selected</h3>
                        <p className="text-sm font-thin text-gray-400">Select a course to show more information.</p>
                    </div>}
            </div>
        </div>
    )
}


