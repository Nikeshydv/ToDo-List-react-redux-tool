// import College from "./pages/College"
// thi is the example of conditional rendering .
import { useState } from "react"
import Birthday from "./pages/Birthday";
import Cybrom from "./pages/Cybrom";














const App=()=>{
    return(<>
    <h1> welcome to cybrom</h1>
    <College my val={true}/>
    </>)
}

export default App;






this is the prop rendering in react constional rendering//


const App=()=>{
    const subject=["php","c++","mongo","react"];

    return(
        <>
        <h1> welcome to cybrom</h1>
        {subject.length>0&& 
        subject.map((key)=>{
           return(
            <>
            <li>{key}</li></>
           )
                
            
        })}
        </>
    )
}

export default App;


// ternary operator//


const App=()=>{

    const[myval,setMyVal]=useState(false);
    setTimeout(()=>{
    setMyVal(true);
    },5000);


    return(
        <>

        <h1> this is  condtional programming</h1>
        {myval ? <Birthday/> :  <Cybrom/>}

        </>
    )
}

export default App;









