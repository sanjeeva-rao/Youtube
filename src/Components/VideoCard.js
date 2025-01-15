import { Link } from "react-router-dom";

const VideoCard = ({data}) => {
    const {snippet, statistics} = data;
    
    return <div className="p-2 m-2 w-60 h-72">
           <Link to={"/watch/"+data.id}>
                <img alt="thubnail"src={snippet.thumbnails.medium.url} />
                <div className="font-bold">{snippet.title}</div>
                <div>{snippet.channelTitle}</div>
                <div>{statistics.viewCount} Views</div>
           </Link>
    </div>
}
export default VideoCard;