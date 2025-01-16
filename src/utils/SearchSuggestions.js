import { createSlice } from "@reduxjs/toolkit";
import reducer from "./appSlice";

const searchSuggestions = createSlice({
    name: "searchCache",
    initialState: {

    },
    reducers: {
        addSuggestionsToCache: (state, action)=>{
            state = Object.assign(state, action.payload)
        }
    }
})

export default searchSuggestions.reducer;
export const {addSuggestionsToCache} = searchSuggestions.actions