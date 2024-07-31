import { useState } from "react";
import { useSelector,useDispatch } from"react-redux";
import { addTask } from "../todoSlice";

const App=()=>{

    const [val,setVal]=useState("");
    const mytask=useSelector((state)=>state.todolist.task);
    const mydis=useDispatch();

    const taskAdd=()=>{
        mydis(addTask({id:Date.now(),task:val}));
    }

    let sno=0;
    const ans=mytask.map((key)=>{
        sno++
    
      return(
        <>
        <tr>
            <td>{sno}</td>
            <td>{key.task}</td>
        </tr>
        </>
      )    
    })
    return(
        <>
        <h1> to do app</h1>
        Enter task:
        <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
        <button onClick={taskAdd}>Add</button>
        <table>
            <tr>
                <th>sno</th>
                <th>Task</th>
            </tr>
            {ans}
        </table>
        </>
    )


  


}

export default App;