import axios from "axios";
import { useState } from "react"


const Insert=()=>{
    const[Input,SetInput]=useState({});


const handleChange=(e)=>{
    // SetInput({...Input,[e.target.name]:e.target.value});
    let name=e.target.name;
    let value=e.target.value;
    SetInput({...Input,[name]:value});

}

const handleSubmit=()=>{
    let url="http://localhost:3000/employee";
    axios.post(url,Input).then(()=>{
        alert("data saved succefully");
    }).catch((err)=>{
        alert("error",err);
    })
}





    return(
        <>
        <form>
Name : <input type="text" placeholder="Enter name" value={Input.name} name="name" onChange={handleChange}/><br/>
Roll no : <input type="text" placeholder="Enter Rollno" value={Input.rollno} name="rollno" onChange={handleChange}/><br/>
City : <input type="text" placeholder="Enter city" value={Input.city} name="city" onChange={handleChange}/><br/>
Fees : <input type="text" placeholder="Enter Fees" value={Input.fees} name="fees" onChange={handleChange}/><br/>

<button type="submit" onClick={handleSubmit}>Save</button>

</form>

        </>
    )
}

export default Insert;