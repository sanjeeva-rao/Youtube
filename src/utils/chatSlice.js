import { createSlice } from "@reduxjs/toolkit";
import { remove_num_of_chats } from "../help";

const chatSlice = createSlice(
    {
        name: "liveChat",
        initialState: {
            messages: []
        },
        reducers: {
            addChat: (state, action) => {
                state.messages.push(action.payload)
            },
            removeChat: (state, action) => {
                state.messages.splice(0,remove_num_of_chats)
            }
        }
    }
)

export default chatSlice.reducer;
export const {addChat, removeChat} = chatSlice.actions