import { useNavigate } from "react-router-dom";

const DisplaySearchResults = ({data}) => {
    const {thumbnails, channelTitle, title, description} = data.snippet;
    const navigate = useNavigate();
    
    
    return <div className="pt-4 px-4 flex" onClick={()=>{navigate("/watch/"+data.id.videoId)}}>
        <img src={thumbnails.medium.url}/>
        <div className="px-4">
            <h1 className="font-bold">{title}</h1>
            <p>{channelTitle} ✅</p>
            <p>{description}</p>
        </div>
    </div>
}
export default DisplaySearchResults;