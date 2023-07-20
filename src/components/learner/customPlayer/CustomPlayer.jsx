import React, { useRef, useState } from 'react'
import { API_ROUTES } from '../../../hooks/useServerHook'
import PlayerControls from './PlayerControls'

export default function CustomPlayer({ close, course, currentMedia, lessons }) {


    const videoRef = useRef()
    const videoControlRef = useRef()
    const videoRefContainer = useRef()

    const [isPlaying, setIsPlaying] = useState(false)
    const [playingMedia, setPlayingMedia] = useState(currentMedia)
    const [selectedTab, setSelectedTab] = useState(0)

    const playPauseVideo = () => {
        if (!videoRef.current.paused) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setIsPlaying(!videoRef.current.paused)
    }

    return (
        <div className="flex-1 flex flex-col absolute top-[17vh] h-[83vh] overscroll-y-auto  md:top-[10vh] left-0 md:left-[20vw] w-full md:w-[80vw] md:h-[90vh] ">

            <div className="flex-1 flex flex-col md:flex-row bg-white">
                <div className="w-full md:w-4/6 shrink-0 bg-white py-3 flex md:pl-3 cursor-pointer">
                    <div className="flex-1  space-y-5 md:rounded-lg flex flex-col">
                        <div className="flex-1 flex flex-col ">
                            <div ref={videoRefContainer} className="relative sm-video"
                                onMouseLeave={e => videoControlRef.current.classList.add("hidden")}
                                onMouseEnter={e => videoControlRef.current.classList.remove("hidden")}>
                                <video onClick={playPauseVideo} ref={videoRef} className=" w-full h-full md:rounded-lg" style={{ objectFit: 'contain', filter: 'brightness(80%)' }}>
                                    <source src={`${API_ROUTES}/video/${playingMedia.src}`} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <PlayerControls videoRefContainer={videoRefContainer} PlayerControlRef={videoControlRef} videoRef={videoRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                            </div>
                            <div className="flex pt-5 items-center justify-between w-full px-3 md:px-0">
                                <h3 className="text-lg font-semibold leading-loose text-gray-700">{currentMedia.name.split('.')[0]}</h3>
                            </div>
                            <div className='flex items-center w-full text-sm space-x-5 text-gray-400 py-3 pt-5 px-3 md:px-0 border-gray-100 border-b'>
                                <div className='flex items-center relative'>
                                    <button onClick={e=>setSelectedTab(0)} className={`${selectedTab == 0 ? 'font-semibold text-gray-600' :''}`}>Description</button>
                                    {selectedTab ==0 && <div className='h-[1px] w-full bg-blue-300 absolute left-0 -bottom-3' />}
                                </div>
                                <div className='flex items-center relative'>
                                    <button onClick={e=>setSelectedTab(1)} className={`${selectedTab == 1 ? 'font-semibold text-gray-600' :''}`}>Resources</button>
                                    {selectedTab ==1 && <div className='h-[1px] w-full bg-blue-300 absolute left-0 -bottom-3' />}
                                </div>
                                <div className='flex items-center relative'>
                                    <button onClick={e=>setSelectedTab(2)} className={`${selectedTab == 2 ? 'font-semibold text-gray-600' :''}`}>Assigments</button>
                                    {selectedTab ==2 && <div className='h-[1px] w-full bg-blue-300 absolute left-0 -bottom-3' />}
                                </div>
                            </div>
                            <div className=" flex-1 py-5 px-3 md:px-0">
                                <p className='text-xs leading-relaxed font-light text-gray-500'>
                                    No content
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col space-y-3 p-3 overflow-hidden">
                    <div className="md:flex-1 h-[30vh] flex flex-col border pb-5 rounded-lg overflow-hidden border-gray-200">
                        <div className="p-5 pb-3">
                            <h3 className="font-semibold">Course Lessons</h3>
                            <p className="text-xs text-gray-400">{course.title}</p>
                        </div>
                        <div className="flex-1 px-5 overflow-y-auto">
                            <div className='h-full text-gray-600 flex flex-col space-y-3 w-full'>
                                {
                                    lessons.map((l, index) => <>
                                        {l.media.map((media, i) => <div onClick={() => setPlayingMedia(media)} key={`lesson-${index}-${i}`} className={`flex items-center justify-between cursor-pointer font-medium ${currentMedia._id == media._id ? 'text-blue-500' : 'text-gray-400'}`}>
                                            {currentMedia._id == media._id && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3">
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>}
                                            <p className='truncate w-full'><span className="text-gray-400 text-sm pr-2">{1}</span>{media.name.split('.')[0]}</p>
                                        </div>)}
                                    </>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-5 space-y-3 flex flex-col border rounded-lg border-gray-200">
                        <div className="pb-2">
                            <h3 className="font-semibold text-gray-700">About Instructor</h3>
                        </div>
                        <div className='flex-1 flex flex-col space-y-3'>
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center text-xs">
                                    <p className="font-bold text-white">{course.author.firstName[0] + "" + course.author.lastName[0]}</p>
                                </div>
                                <div className="text-sm ">
                                    <p className='font-medium'>{course.author.firstName + " " + course.author.lastName}</p>
                                    <p className="text-xs text-gray-400">Instructor</p>
                                </div>
                            </div>
                            {!course.author.about ? <>
                                <div className='h-4 bg-slate-100 rounded-md' />
                                <div className='h-4 bg-slate-100 rounded-md w-4/5' />
                                <div className='h-4 bg-slate-100 rounded-md' />
                            </> :
                                <p className='text-xs leading-relaxed text-light text-gray-500'>{course.author.about}</p>
                            }
                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                window.location = 'mailto:' + course?.author?.email
                            }}
                            className='bg-blue-400 text-white text-xs rounded-md py-3'>Send Message</button>
                    </div>
                    <div className="flex-1"></div>

                </div>
            </div>
        </div>
    )
}
