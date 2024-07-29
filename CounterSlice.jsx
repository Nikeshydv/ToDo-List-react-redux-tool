 import { createSlice } from "@reduxjs/toolkit";
 

 const CounterSlice=createSlice({
    name:"counter",

    initialState:{
        cnt:0
    },

    reducers:{
        myInc:(State)=>{
            State.cnt=State.cnt+1;
        },

        myDic:(State)=>{
            State.cnt=State.cnt-1;
        }
    }
 })

 export default CounterSlice.reducer;
 export const {myInc,myDic}=CounterSlice.actions;











