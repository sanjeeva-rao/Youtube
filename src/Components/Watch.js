import { useParams } from "react-router-dom";

const Watch = () => {
    const videoId = useParams().videoId;
    
    return <div>
        Watch
    </div>
}
export default Watch;