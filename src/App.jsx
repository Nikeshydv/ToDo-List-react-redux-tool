// import College from "./pages/College"
// thi is the example of conditional rendering .
// import { useState } from "react"
// import Birthday from "./pages/Birthday";
// import Cybrom from "./pages/Cybrom";

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Faculty from "./pages/Faculty"
import Ourcourse from "./pages/Ourcourse"
import Contact from "./pages/Contactus"
import Display from "./pages/Display"
import Counter from "./pages/Counter"
import Insert from "./pages/Insert"

const App=()=>{
    return(<>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="home" element={<Home/>}/>
<Route path="about" element={<About/>}/>
<Route  path="faculty" element={<Faculty/>}/>
<Route path="ourcourse" element={<Ourcourse/>}/>
<Route path="contact" element={<Contact/>}/>
<Route path="display" element={<Display/>}/>
<Route path="counter" element={<Counter/>}/>
<Route path="insert" element={<Insert/>}/>

</Route>
    </Routes>
    </BrowserRouter>
    </>)
}

export default App;














// const App=()=>{
//     return(<>
//     <h1> welcome to cybrom</h1>
//     <College my val={true}/>
//     </>)
// }

// export default App;






// this is the prop rendering in react constional rendering//


// const App=()=>{
//     const subject=["php","c++","mongo","react"];

//     return(
//         <>
//         <h1> welcome to cybrom</h1>
//         {subject.length>0&& 
//         subject.map((key)=>{
//            return(
//             <>
//             <li>{key}</li></>
//            )
                
            
//         })}
//         </>
//     )
// }

// export default App;


// // ternary operator//


// const App=()=>{

//     const[myval,setMyVal]=useState(false);
//     setTimeout(()=>{
//     setMyVal(true);
//     },5000);


//     return(
//         <>

//         <h1> this is  condtional programming</h1>
//         {myval ? <Birthday/> :  <Cybrom/>}

//         </>
//     )
// }

// export default App;








// this is the practice of the test questio mostly assked in the question

//

// const App=()=>{
//     return(
//         <>
      
//         <div style={{border:"2px solid black",backgroundColor:"blue",width:"150px", height:"80px",borderRadius:"10px",textAlign:"center"}}>
//         <div style={{border:"2px solid black",backgroundColor:"orange",marginTop:"15px", width:"130px",marginLeft:"7px",height:"50px",borderRadius:"10px"}}>
//         <div style={{border:"2px solid black",backgroundColor:"red",margin:"auto",marginTop:"5px", width:"100px",borderRadius:"8px",marginTop:"10px"}}>
//          <div style={{textAlign:"center"}}>Cybrom</div>
//          </div>
//          </div>
//          </div>
         
//         </>
//     )
// }

// export default App;








