import React, { useEffect, useState } from 'react'

export default function PlayerControls({ PlayerControlRef,videoRefContainer, videoRef, isPlaying, setIsPlaying }) {

    const [currentTime, setCurrentTime] = useState(0);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');

        if (hours > 0) {
            return `${hours}:${minutes}:${seconds}`;
        } else {
            return `${minutes}:${seconds}`;
        }
    };


    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    const handleSliderChange = (e) => {
        const time = parseFloat(e.target.value);
        setCurrentTime(time);
        videoRef.current.currentTime = time;
    };

    function toggleFullScreen() {
        const doc = window.document;
        const docEl = doc.documentElement;
      
        const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        const exitFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
      
        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
          // Enter full screen
          if (requestFullScreen) {
            requestFullScreen.call(docEl);
            videoRefContainer.current.classList.toggle('full-screen')
            videoRefContainer.current.classList.toggle('sm-video')

        }
    } else {
        // Exit full screen
        if (exitFullScreen) {
            exitFullScreen.call(doc);
            videoRefContainer.current.classList.toggle('sm-video')
            videoRefContainer.current.classList.toggle('full-screen')

          }
        }
      }

    const setVolume = (volume) => {
        videoRef.current.volume = volume;
    };

    const playPauseVideo = () => {
        if (!videoRef.current.paused) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setIsPlaying(!videoRef.current.paused)
    }


    useEffect(() => {

        if (videoRef.current) {
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    return (
        <div ref={PlayerControlRef} className="hidden transition-all delay-75 ease-in-out">
            <div className="absolute left-0 bottom-14 w-full px-5">
                <input min={0} max={videoRef.current && videoRef.current.duration} step={0.01} value={currentTime} onChange={handleSliderChange}
                    type='range' className='w-full cursor-pointer h-1 border-none outline-none' />
            </div>
            <div className="absolute flex items-center px-5 md:rounded-b-lg justify-between bottom-0 left-0 h-14 w-full" style={{ background: 'linear-gradient(to top, rgba(0,0,0,.75),transparent)' }}>
                <div className="flex items-center space-x-3  text-white">
                    <button onClick={playPauseVideo}>
                        {!isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                        </svg>
                        }
                    </button>
                    <div className="flex items-center space-x-1">
                        <button >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                                <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                            </svg>

                        </button>
                        <input min={0} max={1} step={0.01} value={videoRef.current ? videoRef.current.voulume : 0.8} onChange={(e) => setVolume(e.target.value)} type="range" className='h-1 w-14 text-white bg-white cursor-pointer' style={{}} />
                    </div>
                    <p className='text-xs font-light'>
                        {formatTime(currentTime)} / {videoRef.current ? formatTime(videoRef.current.duration) : formatTime(0)}
                    </p>

                </div>
                <div className="flex items-center space-x-3  text-white">
                    <button onClick={toggleFullScreen}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
