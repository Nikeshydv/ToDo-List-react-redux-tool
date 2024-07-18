import { Link, Outlet } from "react-router-dom"


const Layout=()=>{
    return(
        <>


<Link style={{fontSize:"25px",color:"black",gap:"10px",textDecoration:"none",fontWeight:"bolder"}} to="home">Home</Link>
<Link style={{fontSize:"25px",color:"black",padding:"10px",textDecoration:"none",fontWeight:"bolder"}} to="about">About</Link>
<Link style={{fontSize:"25px",color:"black",padding:"10px",textDecoration:"none",fontWeight:"bolder"}} to="faculty">Faculty</Link>
<Link style={{fontSize:"25px",color:"black",padding:"10px",textDecoration:"none",fontWeight:"bolder"}} to="ourcourse">Ourcourse</Link>
<Link style={{fontSize:"25px",color:"black",padding:"10px",textDecoration:"none",fontWeight:"bolder"}} to="contact">Contact</Link>
<Link style={{fontSize:"25px",color:"black",padding:"10px",textDecoration:"none",fontWeight:"bolder"}} to="display">Display</Link>
<Link style={{fontSize:"25px",color:"black",padding:"10px",textDecoration:"none",fontWeight:"bolder"}} to="counter">Counter</Link>
<Link style={{fontSize:"25px",color:"black",padding:"10px",textDecoration:"none",fontWeight:"bolder"}} to="insert">Insert</Link>
<br/>

<Outlet/>


        </>
    )
}

export default  Layout;