"use client";
import React, { useEffect, useRef } from 'react';

interface BgVideoProps {
    posterURL: string; 
    videoMP4URL: string;
    overlayBg?: string;
    overlayOpacity?: number;
    positionValue?: any;
}

const BgVideo: React.FC<BgVideoProps> = ({posterURL, videoMP4URL, overlayBg="#000", overlayOpacity=0.1, positionValue="absolute" }) => {

    const videoSection = useRef<HTMLDivElement>(null);
    const video = useRef<HTMLVideoElement>(null);

    const handleScroll = () => {

        if(videoSection.current){
            const videoSectionOffsets = videoSection.current?.getBoundingClientRect()
            const windowHalfHeight = window.innerHeight / 2
            if(videoSectionOffsets?.top < windowHalfHeight && videoSectionOffsets?.bottom > windowHalfHeight){
                video.current?.play()
            }else{
                video.current?.pause()
            }   
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <>
            <div ref={videoSection} className="background_video"  >
                <div className="overlay" style={{opacity:overlayOpacity, backgroundColor:overlayBg}} ></div>
                <video style={{ position: positionValue }} poster={posterURL} ref={video} width="100%" height="100%" playsInline autoPlay muted controls={false} preload="none">
                    <source src={videoMP4URL} type="video/mp4" />
                    {/* Fallback content for browsers that don't support the video tag */}
                    Your browser does not support the video tag. Please consider updating your browser or using a different one.
                </video>
            </div>
        </>
    )
}
export default BgVideo;