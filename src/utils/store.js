import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import popularVideosSlice from "./popularVideosSlice";
import searchSuggestionsCache from "./SearchSuggestions";
import commentSlice from "./commentsSlice"
import chatSlice from "./chatSlice"
const appStore = configureStore({
    reducer: {
        app: appSlice,
        popularVideos: popularVideosSlice,
        searchCache: searchSuggestionsCache,
        comments: commentSlice,
        chat: chatSlice
    }
})

export default appStore;