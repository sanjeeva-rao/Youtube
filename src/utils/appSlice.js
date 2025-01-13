import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        toggleMenuValue: true
    },
    reducers: {
        ChangeToggleMenu: function(state, action){
            state.toggleMenuValue = !state.toggleMenuValue
        }
    }
})

export default appSlice.reducer;
export const {ChangeToggleMenu} = appSlice.actions;