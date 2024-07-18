import { useState } from "react"


const Counter=()=>{
    
    const[intn,setIntn]=useState(0);

const inc=()=>{
    setIntn(intn+10);
}

const dec=()=>{
    setIntn(intn-10);
}

const res=()=>{
    setIntn(0);
}
    
    
    
    
    return(<>
    <div style={{margin:"auto",width:"fit-content"}}>
    <h1 style={{border:"2px solid",width:"fit-content",padding:"10px"}}> Counter number        {intn}</h1>
<button style={{backgroundColor:"green",padding:"10px"}} onClick={inc}>Click to increase</button>
<button style={{backgroundColor:"snow",padding:"10px"}} onClick={dec}>Click to decrease</button>
<button style={{backgroundColor:"red",padding:"10px"}} onClick={res}>click to reset</button>

</div>
    </>)
}

export default Counter;