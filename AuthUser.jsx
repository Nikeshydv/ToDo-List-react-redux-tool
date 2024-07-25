

import { useContext } from "react";

import { MyloginContext } from "./LoginContext";

const AuthUser=()=>{
const[user,logout]=useContext(MyloginContext);

    return(
        <>
<h1> welcome : {user.name}</h1>

<button onClick={()=>{logout()}}>Logout</button>

        </>
    )
}

export default AuthUser;