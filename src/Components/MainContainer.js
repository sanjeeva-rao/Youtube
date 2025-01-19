import { useState, useEffect } from "react";
import { youtube_api_key } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useDispatch } from "react-redux";

const MainContainer = () => {
    const [videoList, setVideoList] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        getVideos();
    }, [])

    const getVideos = async () => {
        const data = await fetch(youtube_api_key);
        const json = await data.json();
        setVideoList(json.items);
    }

    if(!videoList) return null;
    return <div className="flex flex-wrap">
        
        {
            videoList.map(item => <VideoCard key={item.id} data = {item} />)
        }
    </div>
}

export default MainContainer;