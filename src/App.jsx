// // import { useState } from "react"





// // const App=()=>{
// //     const[input,myinput]=useState();
// //     const[roll,myroll]=useState('');

// //     const[phy,myphy]=useState('');
// //     const[chem,mychem]=useState('');
// //     const[math,mymath]=useState('');
// //     const[hindi,myhindi]=useState('')
// //     const[total,mytotal]=useState('');
// //     const[per,myper]=useState('');

// //     const suum=(e)=>{
// //         const { name, value } = e.target;
// //         setInput({
// //             ...input,
// //             [name]: value
// //         });
        
// //     }
  
// //     const handlechange=()=>{
// //         myphy(phy);
// //         mychem(chem);
// //         mymath(math);
// //         myhindi(hindi);
// //     allmarks=myphy+mychem+mymath+myhindi;
// //     mytotal(allmarks);

// //     percenatge=(total/400)*100;
// //     myper(percenatge);
    

// //         }
      
    
    



// //     return(
// //         <>
// // <form>
// //     ROLL NO: <input type="text"  name="roll" value={input.rollno} placeholder="Enter the roll" onChange={()=>suum(e.target.value)}/>
// //     <br/>
// //     phy: <input type="text" name="phy" value={input.phy}placeholder="phy" onChange={()=>suum(e.target.value)}/>
// //     <br/>
// //     chem: <input type="text" name="chem" value={input.chem}placeholder="chem" onChange={()=>suum(e.target.value)}/>
// //     <br/>
// //     math: <input type="text"name="math" value={input.math}placeholder="math" onChange={()=>suum(e.target.value)}/>
// //     <br/>
// //     hindi: <input type="text" name="hindi" value={input.hindi}placeholder="hindi" onChange={()=>suum(e.target.vlaue)}/>
// //     <br/>
// //     <button type="submit" onClick={handlechange}>submit</button>

// //     <div>
// //         <h1>Roll no: {roll}</h1>
// //         <h1>phy: {phy}</h1>
// //         <h1>chem: {chem}</h1>
// //         <h1>math: {math}</h1>
// //         <h1>hindi: {hindi}</h1>
// //         <h1>total: {total}</h1>
// //         <h1>percentage: {per}</h1>
// //     </div>
// //     </form>

// //         </>
// //     )
// //     }

// // export default App;




// import { useState } from "react";

// const App = () => {
//     const [input, setInput] = useState({
//         roll: '',
//         name: '',
//         phy: '',
//         chem: '',
//         math: '',
//         eng: '',
//         hindi: ''
//     });

//     const [total, setTotal] = useState('');
//     const [perc, setPerc] = useState('');
//     const [division, setDivision] = useState('');

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setInput({
//             ...input,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const { phy, chem, math, eng, hindi } = input;
//         const totalMarks = parseFloat(phy) + parseFloat(chem) + parseFloat(math) + parseFloat(eng) + parseFloat(hindi);
//         setTotal(totalMarks);
//         const percentage = (totalMarks / 500) * 100;
//         setPerc(percentage);

//         let div = '';
//         if (percentage >= 60) {
//             div = 'First Division';
//         } else if (percentage >= 45) {
//             div = 'Second Division';
//         } else if (percentage >= 33) {
//             div = 'Third Division';
//         } else {
//             div = 'Fail';
//         }
//         setDivision(div);
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 ROLL NO: <input type="text" name="roll" value={input.roll} placeholder="Enter the roll" onChange={handleInputChange} />
//                 <br />
//                 Name: <input type="text" name="name" value={input.name} placeholder="Enter the name" onChange={handleInputChange} />
//                 <br />
//                 Phy: <input type="text" name="phy" value={input.phy} placeholder="Enter Physics marks" onChange={handleInputChange} />
//                 <br />
//                 Chem: <input type="text" name="chem" value={input.chem} placeholder="Enter Chemistry marks" onChange={handleInputChange} />
//                 <br />
//                 Math: <input type="text" name="math" value={input.math} placeholder="Enter Math marks" onChange={handleInputChange} />
//                 <br />
//                 Eng: <input type="text" name="eng" value={input.eng} placeholder="Enter English marks" onChange={handleInputChange} />
//                 <br />
//                 Hindi: <input type="text" name="hindi" value={input.hindi} placeholder="Enter Hindi marks" onChange={handleInputChange} />
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>

//             <div>
//                 <h1>Roll no: {input.roll}</h1>
//                 <h1>Name: {input.name}</h1>
//                 <h1>Phy: {input.phy}</h1>
//                 <h1>Chem: {input.chem}</h1>
//                 <h1>Math: {input.math}</h1>
//                 <h1>Eng: {input.eng}</h1>
//                 <h1>Hindi: {input.hindi}</h1>
//                 <h1>Total: {total}</h1>
//                 <h1>Percentage: {perc}%</h1>
//                 <h1>Division: {division}</h1>
//             </div>
//         </>
//     );
// }

// export default App;


