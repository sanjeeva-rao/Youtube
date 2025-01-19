import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import popularVideosSlice from "./popularVideosSlice";
import searchSuggestionsCache from "./SearchSuggestions";
import commentSlice from "./commentsSlice"
const appStore = configureStore({
    reducer: {
        app: appSlice,
        popularVideos: popularVideosSlice,
        searchCache: searchSuggestionsCache,
        comments: commentSlice
    }
})

export default appStore;