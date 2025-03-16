import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addChat, removeChat } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generateRandomName, generateRandomChatMessage, max_numOf_cht_display } from "../help";


const LiveChat = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addChat({name: generateRandomName(), message: generateRandomChatMessage(10)}))
        }, 2000)

        return () => clearInterval(i)
    }, [])
    const chatData = useSelector(store => store.chat.messages);
    // After reaching max num of chats, remove chats from 1st
    if(chatData.length > max_numOf_cht_display) {
        dispatch(removeChat())
    }
    
    const changeInputValue = (value) => {
        setInputValue(value);
    }

    const submitChat = () => {
        if(inputValue.length) {
            dispatch(addChat({name: "Sanjeeva", message: inputValue}));
            setInputValue("");
        }
    }

    return <div>
        <div className="ml-8 mt-4 px-2 border border-black w-[400px] h-[350px] bg-slate-100 rounded overflow-y-scroll">
            <div className="py-2 font-bold">Live Chat</div>
            <hr></hr>
            {
                // Don't uyse index as a key
                chatData.map((chat, index) => <ChatMessage key={index} name={chat.name} message={chat.message}/>)
            }
        </div>
        <div className="pl-8 py-2">
            <input className="border border-black rounded-lg px-8 py-1" type="text" placeholder="Chat..." value={inputValue} onChange={(e)=>changeInputValue(e.target.value)} />
            <button className="bg-green-200 px-2 py-1 ml-2 rounded-lg active:bg-green-300" onClick={submitChat}>Sumbit</button>
        </div>
    </div>
}
export default LiveChat;