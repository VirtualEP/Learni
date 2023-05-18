import React from 'react'
import { motion } from 'framer-motion'
import { API_ROUTES } from '../../hooks/useServerHook';
import VideoJS from '../Videojs';

export default function LessonPlayer({ data, onClose }) {

    const playerRef = React.useRef(null);

    const videoJsOptions = {
      autoplay: true,
      controls: true,
      responsive: true,
    //   fluid: true,
      sources: [{
        src: `${API_ROUTES}/video/${data.src}`,
        type: 'video/mp4',
      }]
    };
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // You can handle player events here, for example:
      player.on('waiting', () => {
        videojs.log('player is waiting');
      });
  
      player.on('dispose', () => {
        videojs.log('player will dispose');
      });
    };


    return (
        <motion.div animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} exit={{ translateY: 10, opacity: 0 }} className={`flex absolute top-0 left-0 w-screen h-[90vh] md:h-screen bg-white flex-col flex-1`}>
            <div className="flex-1 flex md:flex-row-reverse flex-col overflow-y-auto">
                <div className="flex-1 flex items-center justify-center md:pr-5">
                    {/* <iframe className='w-full' height="500" src="https://www.youtube-nocookie.com/embed/6DaJVZBXETE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    {data.type == 'video' && <video id="videoPlayer" className='w-full h-[500px] bg-black' controls controlsList="nodownload" onContextMenu={()=>null} autoPlay>
                        <source src={`${API_ROUTES}/video/${data.src}`} type="video/mp4" />
                    </video>}
                    {/* {data.type == 'video' && <VideoJS  options={videoJsOptions} onReady={handlePlayerReady}/>} */}
                </div>
                <div className="md:w-1/3 border-l p-5 flex-col space-y-3 relative">
                    <h1 className='font-medium text-gray-900 md:text-xl '>Lesson Note</h1>
                    <div className='flex flex-col space-y-5'>
                        <h2 className="text-lg md:text-4xl font-bold truncate">{data.name}</h2>
                        {data.notes.map((data, i) => <p key={`note-${i}`} className='text-gray-600 font-normal leading-relaxed'>
                            {data}
                        </p>)}

                        <p className='bg-blue-200 py-5 px-6 text-blue-800'>There are no notes attached to this meida</p>
                    </div>

                    {/* <button className='border rounded-full p-3 bg-white shadow-sm  absolute -left-8 top-0 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button> */}
                </div>
            </div>
            <div className="w-full flex items-center justify-center space-x-5 bg-white border-t">
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
            </div>
        </motion.div>
    )
}
