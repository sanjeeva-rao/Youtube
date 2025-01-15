import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import popularVideosSlice from "./popularVideosSlice"
const appStore = configureStore({
    reducer: {
        app: appSlice,
        popularVideos: popularVideosSlice
    }
})

export default appStore;