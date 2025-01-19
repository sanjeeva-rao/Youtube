import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VideoBackground from "./VideoBackground";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addWatchVideos } from "../utils/popularVideosSlice";
const Watch = () => {
    const videoId = useParams().videoId;
    const [selectedVideoDetails, setSelectedVideoDetails] = useState(null);
    const dispatch = useDispatch();
    const watchVideos = useSelector(store => store.popularVideos)
    useEffect(()=>{
        getVideoById();
    }, [])

    const getVideoById = async () => {
        if(watchVideos[videoId]){
            setSelectedVideoDetails(watchVideos[videoId]);
            console.log("use cache")
        }
        else{
            const data = await  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyCth_xe0ZlPPxa55JrwTiwK9kilFFqFzaA");
            const json = await data.json();
            console.log(json, "json");
            setSelectedVideoDetails(json.items[0])
            dispatch(addWatchVideos({[videoId]: json.items[0]}));
            console.log("use api//")
        }
    }
    
    
    return selectedVideoDetails && <div className="py-4 pl-36 w-[650px]">
        <VideoBackground title={selectedVideoDetails.snippet.title} videoId = {videoId}/>
    </div>
}
export default Watch;