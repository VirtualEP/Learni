import React, { useEffect } from 'react'
import CourseMediacard from './CourseMediacard'
import LessonPlayer from './LessonPlayer'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useParams } from 'react-router'
import { API_ROUTES, useServerHook } from '../../hooks/useServerHook'
import { Link, useLocation } from 'react-router-dom'
import CustomPlayer from './customPlayer/CustomPlayer'

export default function CourseLessons() {

    const [showPlayer, setShowPlayer] = useState(false)
    const [topics, setTopics] = useState([])
    const [selectedMedia, setSelectedMedia] = useState()
    const { getCourseMedia } = useServerHook()
    const params = useParams()
    const location = useLocation()

    function onPreviewMedia(data) {
        setSelectedMedia(data)
        setShowPlayer(true)
    }

    useEffect(() => {
        getCourseMedia(params.id).then(response => {
            setTopics(response.data.topics);
        }).catch(err => { }).finally(() => { })
    }, [])

    return (<div className="flex flex-1">
        <div className='flex-1 flex flex-col space-y-5 py-5'>
            <h3 className='font-bold'>Lessons or Contents</h3>
            <div className='flex-1 md:pl-3  space-y-5 w-full overflow-x-hidden'>
                {topics.map((data, index) => <div key={`${index}`} className='flex flex-col space-y-2'>
                    <div className='flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-300">
                            <path fillRule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clipRule="evenodd" />
                        </svg>
                        <h5>{data?.title}</h5>
                    </div>
                    <div className="flex md:ml-2 py-2 flex-row flex-wrap  items-center">
                        {data.media.map((media, index) => <CourseMediacard onPress={() => onPreviewMedia(media)} data={media} key={`media-${data.title}-${index}`} />)}
                    </div>
                </div>)}
            </div>
        </div>

        <AnimatePresence >
            {/* {showPlayer && <LessonPlayer course={location.state} data={selectedMedia} vissible={showPlayer} onClose={() => setShowPlayer(false)} />} */}
            {showPlayer && <CustomPlayer course={location.state} currentMedia={selectedMedia} vissible={showPlayer} close={() => setShowPlayer(false)} lessons={topics} />}
        </AnimatePresence>
    </div>
    )
}
