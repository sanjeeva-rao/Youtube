import { createSlice } from "@reduxjs/toolkit";

const popularVideosSlice = createSlice({
    name: "Popular Videos",
    initialState: {
        videos: null
    },
    reducers: {
        addPopularVideos: (state, action)=>{
            state.videos = action.payload
        }
    }
})

export default popularVideosSlice.reducer;
export const {addPopularVideos} = popularVideosSlice.actions