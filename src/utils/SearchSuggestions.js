import { createSlice } from "@reduxjs/toolkit";
import reducer from "./appSlice";

const searchSuggestions = createSlice({
    name: "searchCache",
    initialState: {
        videos: {

        }
    },
    reducers: {
        addSuggestionsToCache: (state, action)=>{
            state = Object.assign(state, action.payload)
        },

        addSearchVideosToCache: (state, action)=>{
            state.videos = Object.assign(state.videos, action.payload)
        }
    }
})

export default searchSuggestions.reducer;
export const {addSuggestionsToCache, addSearchVideosToCache} = searchSuggestions.actions