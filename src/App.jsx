 import { useSelector,useDispatch } from "react-redux";
 import { myInc,myDic } from "../CounterSlice";

 const App=()=>{
const counter=useSelector((state)=>state.mycounter.cnt)
const myDis=useDispatch();

    return(
        <>
<h1> my counter app</h1>
<button onClick={()=>{myDis(myInc())}}>Increment</button>
<h1> {counter}</h1>
<button onClick={()=>{myDis(myDic())}}>Decrement</button>


        </>
    )
 }

 export default App;