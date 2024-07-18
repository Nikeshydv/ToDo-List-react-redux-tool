import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';


const Display=()=>{

    const[myData,setMyData]=useState([]);

    const LoadData=()=>{
        let url="http://localhost:3000/employee";
        axios.get(url).then((res)=>{
            setMyData(res.data);
            
        })
    }

    useEffect(()=>{
        LoadData();
    })


    const ans=myData.map((key)=>{
        return(
            <>
<tr>
    <td>{key.Empid}</td>
    <td>{key.Empname}</td>
    <td>{key.Designation}</td>
    <td>{key.Departmet}</td>
    <td>{key.Salary}</td>
  
</tr>

            </>
        )
    })

    return(<>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>EMPID</th>
          <th>EMP Name</th>
          <th>Emp Desination</th>
          <th>EMP DEPARTMENT</th>
          <th>Emp salary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
    
    </>)
}

export default Display;