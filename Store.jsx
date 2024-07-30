
import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./ColorSlice";

const Store=configureStore({
    reducer:{
        mycolor:myreducer,
    }
   
})

export default Store;


