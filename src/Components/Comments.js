import CommentList from "./CommentList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentsToSlice } from "../utils/commentsSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Comments = ({id}) => {
    const [commentText, setCommentText] = useState("");
    const dispatch = useDispatch();
    const commentsDataFromStore = useSelector(store => store.comments);
    const [CommentsData, setCommentsData] = useState([]);
    useEffect(()=>{
        setCommentsData(commentsDataFromStore[id])
    }, [])
    const addComments = () => {    
        var tempData;
        if(commentsDataFromStore[id]) {
            tempData = [...commentsDataFromStore[id], {name: "user", text: commentText}]
        }
        else{
            tempData = [
                {
                    name: "user",
                    text: commentText
                }
            ]   
        }
        dispatch(addCommentsToSlice({[id]:tempData}));
        setCommentsData(tempData)
    }

    return <div>
        <p className="font-bold">Comments</p>
        <input type="text" className = "w-60 border border-gray-700 mt-4 p-2 rounded-lg" value={commentText} onChange={(e)=>{setCommentText(e.target.value)}}/>
        <button className="bg-slate-200 py-2 px-4 rounded-lg m-2" onClick={addComments} >Add</button>
        <button className="bg-slate-200 py-2 px-4 rounded-lg">Cancel</button>
        {
            CommentsData && CommentsData.map((data, index) => {
                return <CommentList data = {data} key={index} />
                
            })
        }
    </div>
}

export default Comments;