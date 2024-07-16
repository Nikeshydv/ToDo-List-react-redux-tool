// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Experience from "./pages/Experience"
// import Contact from "./pages/Contact"
// import Nopage from "./pages/Nopages"
// import Layout from "./pages/Layout"
// import Project from "./pages/Product"

// import axios from "axios";
// import { useEffect, useState } from "react";
// import Table from 'react-bootstrap/Table';
// import { Table } from "react-bootstrap"

// // import { useState } from "react"



// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
    
//       <Route path="/" element={<Layout/>}>
//       <Route path="home" element={<Home/>}/>
//       {/* <Route path="About" element={<About/>}/> */}
//       <Route path="experience" element={<Experience/>}/>
//       <Route path="contact" element={<Contact/>}/>
//       <Route path="project" element={<Project/>}/>
//       <Route path="*" element={<Nopage/>}>
//       </Route>
   
      
      
      
//       </Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App;




// const App=()=>{
//   const[name,setName]=useState("");
//   const[city,setCity]=useState("");

// const submitHandel=()=>{
//   let inputVal={name:name,city:city};
//   console.log(inputVal);
// }


//   return(
//     <>
//     <h1> this is the application form</h1>
//     Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>

//     City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//     <br/>

//     <button onClick={submitHandel}>click</button>


//     </>
//   )
// }


// export default App;







// const App=()=>{

//   const[empid,empId]=useState("");
//   const[name,empName]=useState("");
//   const[city,setCity]=useState("");
//   const[salary,setSalary]=useState("");

//   const handleSubmit=()=>{
//     console.log({empid:empid,name:name,city:city,salary:salary})
//   }





//   return(
//     <>
//     <h1> application for the emplpoyee</h1>
//    EmployeeId: <input  type="number" value={empid} onChange={(e)=>{empId(e.target.value)}}/><br/>
//   employeename:  <input type="text" value={name} onChange={(e)=>{empName(e.target.value)}}/><br/>
//    EmployeeCity: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/><br/>
//    EmployeeSalary: <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/><br/>

//     <button onClick={handleSubmit}> click</button>

//     </>
//   )



// }

// export default App;



// this is the exapmple of useeffect//


// import { useEffect, useState } from "react";


// const App=()=>{


//   const[cnt,setCnt]=useState(0);


// useEffect(()=>{
//   setTimeout(()=>{
//     setCnt(cnt+1);
//   },5000)
// },[])



// return(
//   <>
//   <h1> this is there method of use effect {cnt}</h1>
//   </>
// )


// }

// export default App;



// this is the method  of use effect and the use state effect //

// const App=()=>{
//  const[cnt,setCnt]=useState(0)
//  const[multi,setMulti]=useState(2)


// useEffect(()=>{
//   setMulti(cnt*2)
// },[cnt])



//  return(
//   <>
//  <h1> this is the effentn method {cnt}</h1>
//  <h1> this is the multiplication {multi}</h1>
//  <button onClick={()=>{setCnt(cnt+1)}}>CLICK HERE</button>
//   </>
//  )
// }

// export default App;






//toprint the even number in the use state


// const App=()=>{

//   const[add,myAdd]=useState(0);
  
// useEffect(()=>{

// },[])

//   return(
//     <>
//     <h1> this is the functrion to add</h1>
//     <h1>{add}</h1>
//     <button onClick={()=>{myAdd(add+add+1)}}>Click to Add</button>
//     </>
//   )
// }

// export default App;


// import Table from 'react-bootstrap/Table';





// const App=()=>{
//   const[mydata,setData]=useState([])

//   const loadData=()=>{
//     let url ="https://jsonplaceholder.typicode.com/todos/";
//     axios.get(url).then((res)=>{
//       setData(res.data)
//       console.log(res.data);
//     });
//   }


// const loadData=()=>{
//   let api="http://localhost:3000/student";
//   axios.get(api).then(res)=>{
//     console.log(res.data);
//     setMydata(res.data);

//   });


//   useEffect(()=>{
//     loadData();
//   },[])

//   let status ="";
//   const ans=mydata.map((key)=>{
//     if(key.completed==true){
//       status="True";
//     }
//     else{
//       status="false"
//     }

//     return(
//       <>
//       <tbody>
//       <tr>
//         <td>{key.userId}</td>
//         <td>{key.id}</td>
//         <td>{key.title}</td>
//         <td>{status}</td>
//       </tr>
//       </tbody>
//       </>
//     )
//   })

//   return(
//     <>
//     {/* <table  striped bordered hover>
     
//       <tr className="border">
//         <th>USER ID</th>
//         <th>id</th>
//         <th>title</th>
//         <th>completed</th>
//       </tr> */}
// <h1 className="text-center"> json </h1>
// <Table striped bordered hover size="sm" style={{width:'fit-content', margin:'auto', marginTop:'20px'}}>
//       <thead>
//         <tr>
//           <th>USERID</th>
//           <th>ID</th>
//           <th>TITLE</th>
//           <th>COMPLETED</th>
//         </tr>
//       </thead>
      
//       {ans}
//     </Table>
//     </>
//   )
// }

// export default App;







// const App=()=>{

//   const[myData,setMydata]=useState([]);


//   const loadData=()=>{
//     let api="http://localhost:3000/student";
//     axios.get(api).then((res)=>{
//       console.log(res.data);
//       setMydata(res.data);

//     });
  
// }

// const ans=myData.map((key)=>{
//   return(
//     <>
//     <tr >
//       <td>{key.Rollno}</td>
//       <td>{key.Name}</td>
//       <td>{key.City}</td>
//       <td>{key.Fees}</td>
//     </tr>
//     </>
//   )


// });

// useEffect(()=>{
//   loadData();
// },[]);

// return(
//   <>
//   <h1> welcome to student data</h1>
//   <Table  striped>
//   <tbody>
//         <tr >
//           <td>Roll no</td>
//           <td>Name</ td>
//           <td>city</td>
//           <td>Fess</td>
//         </tr>
//         </tbody>
//         {ans}
//         </Table>
//   </>
// )
// }

// export default App;





// const App=()=>{
//   const[myData,setMydata]=useState([]);

//   const loader=()=>{
//     let url="http://localhost:3000/student";
//     axios.get(url).then((res)=>{
//       console.log(res.data);
//       setMydata(res.data);
//     })
//   }

//   useEffect(()=>{
//     loader();
//   },[])

//  const ans=myData.map((key)=>{
//   return(
//     <>
//     <tr>
//       <td>{key.Rollno}</td>
//       <td>{key.Name}</td>
//       <td>{key.City}</td>
//       <td>{key.Fees}</td>
//     </tr>
//     </>
//   )
//  });

//  return(
//   <>
//   <Table className="border border-2" >
//     <tbody id="tab">
//       <tr id="tab">
//         <td id="tab">Roll no</td>
//         <td >Name</td>
//         <td>City</td>
//         <td>Fees</td>
//       </tr>
//       {ans}
//     </tbody>
//   </Table>
//   </>
//  )

// }
// export default App;






// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// const App = () => {
//   const [name, setName] = useState('');
//   const [rollNo, setRollNo] = useState('');
//   const [city, setCity] = useState('');
//   const [fees, setFees] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ name, rollNo, city, fees });
//   };

//   return (
//     <Container>
//       <Row>
//         <Col md={6} className="mx-auto">
//           <h1 className="text-center">Student Application Form</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             </Form.Group>

//             <Form.Group controlId="rollNo">
//               <Form.Label>Roll No</Form.Label>
//               <Form.Control type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
//             </Form.Group>

//             <Form.Group controlId="city">
//               <Form.Label>City</Form.Label>
//               <Form.Control type="text" value={city} onChange={(e) => setCity(e.target.value)} />
//             </Form.Group>

//             <Form.Group controlId="fees">
//               <Form.Label>Fees</Form.Label>
//               <Form.Control type="text" value={fees} onChange={(e) => setFees(e.target.value)} />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default App;








