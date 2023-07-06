import React, { useState, useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/sea/index.css';

export default function MediaPlayer({theme='sea',options}) {

 
    const videoRef = useRef(null)
    const playerRef = useRef(null)


    useEffect(() => {

        const player = playerRef.current;

        if (!player) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            playerRef.current = videojs(videoElement, options)
        }

        return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        }

    }, [videoRef, playerRef])


    return (
       <div data-vjs-player>
            <video ref={videoRef}  className={`aspect-video w-[700px] h-auto vjs-big-play-centered vjs-theme-${theme}`} />
       </div>
    )
}
