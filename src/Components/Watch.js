import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Watch = () => {
    const videoId = useParams().videoId;
    const VideoDetails = useSelector(store => store.popularVideos.videos);
    var selectedVideoDetails;
    VideoDetails.forEach(function(video){
        if(video.id === videoId) {
            selectedVideoDetails = video;
        }
    })
    console.log(selectedVideoDetails, "selectedVideoDetails");
    
    

    
    return <div className="p-4 w-[650px]">
        <iframe width="650" height="350" 
        src={"https://www.youtube.com/embed/"+videoId+"?si=h-BWsGU3ExvC-ZC9" }
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
        <div className="font-bold py-4">{selectedVideoDetails.snippet.title}</div>
    </div>
}
export default Watch;