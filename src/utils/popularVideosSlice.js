import { createSlice } from "@reduxjs/toolkit";

const popularVideosSlice = createSlice({
    name: "Popular Videos",
    initialState: {
    },
    reducers: {
        addWatchVideos: (state, action)=>{
            state = Object.assign(state, action.payload)
        },
    }
})

export default popularVideosSlice.reducer;
export const {addWatchVideos} = popularVideosSlice.actions