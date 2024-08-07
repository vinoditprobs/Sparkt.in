"use client";
import { useState } from "react";
import VideoPlayer from "../videoPlayer"
import Image from "next/image"

const WorkBanner = ({...props}) => {
    
    const [isPlaying, setIsPlaying] = useState(false);

    const bannerVideoPlaybackState = (isPlaying:any) => {
        setIsPlaying(isPlaying);
        if (isPlaying) {
            document.body.classList.add("bannerVideoIsPlaying");
          } else {
            document.body.classList.remove("bannerVideoIsPlaying");
          }
    }
    

    const workTitle = props.title
    const workSubText = props.subText
    const videoUrl = props.videoUrl
    const imageUrl = props.imageUrl


    return(
        <>

            <div className="work_banner" >
                <figure>
                       <div className="media" >
                        {videoUrl ? (
                             <VideoPlayer videoUrl={videoUrl} posterImage={imageUrl} playbackState={bannerVideoPlaybackState} />
                        ) : (
                            <Image src={imageUrl} alt={workTitle} width={100} height={100} className="cover" /> 
                        )
                        }
                        </div> 
                    <figcaption>
                    <h1>{workTitle}</h1>
                    <p>{workSubText}</p>
                    </figcaption>
                </figure>
            </div>
        
        </>
    )
}
export default WorkBanner