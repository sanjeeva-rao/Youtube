import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import VideoBackground from "./VideoBackground";
const Watch = () => {
    const videoId = useParams().videoId;
    const VideoDetails = useSelector(store => store.popularVideos.videos);
    var selectedVideoDetails;
    VideoDetails.forEach(function(video){
        if(video.id === videoId) {
            selectedVideoDetails = video;
        }
    })
    
    
    return <div className="py-4 pl-36 w-[650px]">
        <VideoBackground title={selectedVideoDetails.snippet.title} videoId = {videoId}/>
    </div>
}
export default Watch;