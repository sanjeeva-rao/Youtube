import Comments from "./Comments";
import LiveChat from "./LiveChat";
const VideoBackground = ({title, videoId}) => {
    return <div className="flex">
        <div className="p-4 w-[650px]">
            <iframe width="650" height="350" 
            src={"https://www.youtube.com/embed/"+videoId+"?si=h-BWsGU3ExvC-ZC9" }
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
            <div className="font-bold py-4">{title}</div>
            <Comments id={videoId}/>
        </div>
        <div>
            <LiveChat/>
        </div>
    </div>
}
export default VideoBackground;