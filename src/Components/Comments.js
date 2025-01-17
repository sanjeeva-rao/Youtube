import CommentList from "./CommentList";
import { useState } from "react";
const Comments = () => {
    const [commentText, setCommentText] = useState("");
    const [CommentsData, setCommentsData] = useState([{
        name: "Sai Ram",
        text: "amazing! very good"
    }]);
    
    const addComments = () => {    
        setCommentsData([
            ...CommentsData,{
                name: "user",
                text: commentText
            }
        ]);
        
    }

    return <div>
        <p className="font-bold">Comments</p>
        <input type="text" className = "w-60 border border-gray-700 mt-4 p-2 rounded-lg" value={commentText} onChange={(e)=>{setCommentText(e.target.value)}}/>
        <button className="bg-slate-200 py-2 px-4 rounded-lg m-2" onClick={addComments} >Add</button>
        <button className="bg-slate-200 py-2 px-4 rounded-lg">Cancel</button>
        {
            CommentsData.map((data, index) => {
                return <CommentList data = {data} key={index} />
                
            })
        }
    </div>
}

export default Comments;