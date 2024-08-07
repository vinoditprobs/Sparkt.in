"use client";
import { transform } from "next/dist/build/swc";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";


interface VideoPlayerProps {
  videoUrl: string; 
  posterImage: string;
  playbackState: any;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, posterImage, playbackState }) => {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const isYouTubeUrl = (url: string): boolean => {
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return youtubeRegex.test(url);
  };
  const isYouTube = isYouTubeUrl(videoUrl);

  const handlePlay = () => {
    setIsVideoPlaying(true);
    playbackState(true);
    //console.log('playing')
  };
  const handlePause = () => {
    setIsVideoPlaying(false);
    playbackState(false);
    //console.log('Paused')
  };

  const videoWrapper = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (videoWrapper.current) {
      const videoWrapperOffsets = videoWrapper.current?.getBoundingClientRect();
      const windowHalfHeight = window.innerHeight / 2;
      if (
        videoWrapperOffsets?.top < windowHalfHeight &&
        videoWrapperOffsets?.bottom > windowHalfHeight
      ) {
        //  setIsVideoPlaying(true);
      } else {
        setIsVideoPlaying(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [rootUrl, setRootUrl] = useState("");
  useEffect(() => {
    setRootUrl(window.location.origin);
  }, []);

  return (
    <div ref={videoWrapper} className={`player-wrapper ${!isVideoPlaying ? "stop" : ""}`} >
      <div className="videoPlayerContainer">
        <div className="poster" onClick={() => !isVideoPlaying && setIsVideoPlaying(true)} >
          <div className="play_icon" >
          <span className="s_icon xl cursor_scale  bg-white text-dark shadow" >
          <i className="pi pi-sort-down-fill" style={{transform:`rotate(-90deg)`, marginLeft:'0.1em'}} ></i>
          </span>
          </div>
          <img src={posterImage} alt="" />
        </div>
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          url={videoUrl}
          controls={true}
          playing={isVideoPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
          config={
            isYouTube
              ? {
                  youtube: {
                    playerVars: {
                      origin: rootUrl,
                      showInfo: 0,
                      modestBranding: 0,
                      rel: 0,
                      playsInline: 0,
                      start: 1,
                    },
                  },
                }
              : {}
          }
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
