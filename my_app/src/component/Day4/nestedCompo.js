
import React,{useState} from "react";

export function Mainparent(){

    const[nest,setnest]=useState("11");

    const update=(str)=>{
        console.log("hehe",str);
        setnest("40");
    }

    return(
        <>
       <p>Parent data:</p> 
       <Childcom abc={update}/>
        </>
    );
}

 function Childcom(props){


    return(
        <>
        <h1>Childdata:</h1>
    <button onClick={()=>props.abc()}>PCCC</button>
    
    </>
    )
}

