import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../ColorSlice";
import { useState } from "react";


const App=()=>{
    const myclr=useSelector((State)=>State.mycolor.bgcolor);
    const mydis=useDispatch();
    const[clr,setClr]=useState("");

    return(
        <>
<h1> REXUS TOOLKIT</h1>        
Enter your color: <input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}}/>
<button onClick={()=>{mydis(changeColor(clr))}}>Change color</button>
<div style={{width:"500px",height:"300px",backgroundColor:myclr}}></div>
        </>
    )
}
export default App;