import Bhopal from "./Bhopal";
import Cybrom from "./Cybrom";

const College=(props)=>{
if(props.val){
    return <Cybrom/>;
}
else{
    return <Bhopal/>
}


    return(
        <>
    <Cybrom/>
    <Bhopal/>
        </>
    )
}

export default College;