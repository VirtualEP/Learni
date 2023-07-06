import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { API_ROUTES } from '../../hooks/useServerHook';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";
import MediaPlayer from '../MediaPlayer';


export default function LessonPlayer({ data, onClose, course }) {

    const playerRef = React.useRef();

    const [shareModal, setShareModal] = React.useState(false)

    return (
        <motion.div animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} exit={{ translateY: 10, opacity: 0 }} className={`flex absolute top-0 left-0 w-screen h-[90vh] md:h-screen bg-gray-100 flex-col flex-1 z-10`}>
            <div className="bg-white p-5 border-b flex items-center justify-between">
                <div className="flex items-center space-x-1 px-5 py-1">
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
                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                    </svg>
                    <a href="/" className="text-2xl font-bold ">
                        i<span className="text-blue-600 ">Learn</span>{" "}
                    </a>
                </div>
                <button onClick={onClose} className="bg-white flex items-center space-x-2 text-gray-600 px-6 py-2 md:flex">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>

                    <p>
                        Exit
                    </p>
                </button>

            </div>
            <div className="flex-1 flex md:flex-row flex-col ">
                <div className="flex-1 flex flex-col space-y-5 rounded-md">
                    <div className=" pt-5">
                        <div className="px-2 md:px-5">
                            {data.type == 'video' && <video ref={playerRef} id="videoPlayer" className='w-full h-auto aspect-video rounded-lg overflow-hidden bg-black' controls controlsList="nodownload" onContextMenu={() => null}>
                                <source src={`${API_ROUTES}/video/${data.src}`} type="video/mp4" />
                            </video>}
                            
                        </div>
                        <div className="px-5 border-b uppercase flex items-center space-x-5 py-5 relative">
                            <button
                                onClick={e => setShareModal(true)}
                                className="flex space-x-2 items-center text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                                </svg>

                                <p className="uppercase font-normal text-gray-500">Share course</p>
                            </button>
                            <AnimatePresence>
                                {shareModal && <motion.div initial={{ opacity: 0, translateX: -3 }} animate={{ opacity: 1, translateX: 0 }} exit={{ opacity: 0, translateX: -3 }} className="animate bg-white absolute left-0 top-12 flex items-center space-x-3 px-2 py-2 shadow-sm rounded">
                                    <TwitterShareButton>
                                        <TwitterIcon size={32} round={true} />
                                    </TwitterShareButton>
                                    <EmailShareButton>
                                        <EmailIcon size={32} round={true} />
                                    </EmailShareButton>
                                    <FacebookShareButton>
                                        <FacebookIcon size={32} round={true} />
                                    </FacebookShareButton>
                                    <LinkedinShareButton>
                                        <LinkedinIcon size={32} round={true} />
                                    </LinkedinShareButton>
                                    <TelegramShareButton>
                                        <TelegramIcon size={32} round={true} />
                                    </TelegramShareButton>
                                    <TwitterShareButton>
                                        <TwitterIcon size={32} round={true} />
                                    </TwitterShareButton>
                                    <WhatsappShareButton round={true} >
                                        <WhatsappIcon size={32} round={true} />
                                    </WhatsappShareButton>
                                    <button
                                        onClick={e => setShareModal(false)}
                                        className="h-8 w-8 shrink-0 rounded-full border bg-slate-500 text-white flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </button>
                                </motion.div>}
                            </AnimatePresence>
                            <button
                                onClick={(e) => {
                                    window.location = 'mailto:' + course?.author?.email
                                    e.preventDefault();
                                }}
                                className="flex space-x-2 items-center text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                                <p className="uppercase font-normal text-gray-500">Contact Instructor</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 px-5">
                        <h2 className="text-lg text-gray-700 md:text-2xl font-medium truncate">{data.name}</h2>
                        <div className="flex items-center space-x-1">
                            <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-xs">
                                <p className="font-bold text-white">{course.author.firstName[0] + "" + course.author.lastName[0]}</p>
                            </div>
                            <p className="text-gray-500 font-light">Course by : </p>
                            <p className="text-blue-700 font-medium">
                                {course.author.firstName + " " + course.author.lastName}
                            </p>
                        </div>
                        <p></p>
                    </div>

                    {/* {data.type == 'video' && <VideoJS  options={videoJsOptions} onReady={handlePlayerReady}/>} */}
                </div>
                <div className="md:w-1/3 border-l  p-5 flex-col space-y-3 relative">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>

                        <h1 className='leading-loose text-gray-900'>Lesson Note</h1>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        {data.notes.map((data, i) => <p key={`note-${i}`} className='text-gray-600 font-normal leading-relaxed'>
                            {data}
                        </p>)}
                        <div className="backdrop-blur-lg backdrop-filter bg-white/30 p-5 rounded-md border">
                            <p className='text-gray-700'>There were no notes available for these <span className='font-medium'>lesson</span> or <span className='font-medium'>video</span>. Once a video is been available you would be able to access it directly from this section.</p>
                        </div>
                    </div>

                    {/* <button className='border rounded-full p-3 bg-white shadow-sm  absolute -left-8 top-0 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button> */}
                </div>
            </div>
            {/* <div className="w-full flex items-center justify-center space-x-5 bg-white border-t">
                <button onClick={onClose} className=' bg-red-600 md:px-10 px-5 my-3 md:my-10 py-3 text-xs md:text-sm flex rounded-full text-white space-x-2'>
                    <span>Close Lesson</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className=' bg-blue-600 md:px-10 px-5 my-3 md:my-10 py-3 text-xs md:text-sm flex rounded-full text-white space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                    </svg>

                    <span>Next Lesson</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>

                </button>
            </div> */}
        </motion.div>
    )
}
