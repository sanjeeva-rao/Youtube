import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {},
    reducers: {
        addCommentsToSlice: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
})

export default commentsSlice.reducer;
export const {addCommentsToSlice} = commentsSlice.actions;
