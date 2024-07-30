import { createSlice } from "@reduxjs/toolkit";

const ColorSlice= createSlice({
    name:"mycolor",

    initialState:{
        bgcolor:"red"
    },

    reducers:{
        changeColor:(State,actions)=>{
            State.bgcolor=actions.payload
        }
    }
})

export default ColorSlice.reducer;
export const {changeColor}=ColorSlice.actions;