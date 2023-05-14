import React, { useEffect, useRef, useState } from 'react'
import { useParams, } from 'react-router-dom'
import { useServerHook } from '../../hooks/useServerHook';
import LoadingBar from 'react-top-loading-bar'

const data = {
    title: 'Morden Art and Ideas',
    cover: 'https://images.unsplash.com/photo-1537884557178-342a575d7d16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    author: 'Kwame K. Adu Willson',
    lessons: 11,
    subscribers: 20,
    rating: 4.5,
    live: false

}

export default function CourseSummary() {
    const params = useParams()
    const [loading, setLoading] = useState(false)
    const [courseData, setCourseData] = useState(null)
    const [topics, setTopics] = useState([])
    const ref = useRef(null)

    const { getSingleCourses,getTopics } = useServerHook()


    useEffect(() => {
        setLoading(true)
        ref.current.continuousStart()
        getSingleCourses(params.id).then((response) => {
            setCourseData(response.data.course);
            getTopics(response.data.course._id).then((response) => {
                setTopics(response.data.topics)
              })
        }).catch((error) => { })
            .finally(() => {
                ref.current.complete();
                setLoading(false)
            })
    }, [])

    return (
        <div className="my-10 flex-1 flex flex-col w-3/4">
            <LoadingBar color='blue' ref={ref} />
            {!loading && courseData !== null && <>
                <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex items-center space-x-5">
                        <p className="font-bold text-sm text-black">5.0</p>
                        <p className='font-light text-xs text-gray-600'>132,135 ratings</p>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">{courseData?.title}</h2>
                <p className="my-4 text-xs text-gray-500 leading-5">{courseData?.discription}</p>
                <div className="flex items-center space-x-5 pb-5 border-gray-100 mt-2 font-light w-2/3">
                    {!data.live ? <button className="bg-blue-400 shrink-0 text-white px-5 py-2 rounded-3xl text-sm flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                        </svg>
                        <p>Pre-Recored</p>
                    </button> :
                        <button className="bg-blue-400 shrink-0 text-white px-5 py-2 rounded-3xl text-sm flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                            </svg>
                            <p>Live Lesson</p>
                        </button>}
                    <div className='text-xs '>
                        <h3>Enroll to gain access to all <span className='font-bold text-gray-700'>recoreded Lesson</span> and <span className='font-bold text-gray-700'>Instructor's Contact</span> for further questions.</h3>
                    </div>
                </div>
                <div className='flex flex-col space-y-5'>

                {topics.map((topic, index) => <div key={`topic-${index}`} className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-gray-300"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <h5>{topic.title}</h5>
                </div>)}
                </div>
            </>}

        </div>
    )
}
