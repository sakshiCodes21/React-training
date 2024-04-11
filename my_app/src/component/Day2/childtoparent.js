import React from "react";

export function Parent(){
    var age=30;
    const handle=(string)=>{
        console.log("in a parent", string);
        
    }
    return(
        <>
        
         <Child data={age} handle={handle}/> 

        </>
    )
}

function Child(props){
    const string="hello";
    console.log(props);
    const handle=(string)=>{
        console.log("in a parent", string);
        
    }
    return(
        <>
        <p>{props.data}</p>
        <button onClick={()=>props.handle(string)}>click me</button>
        <Child2 abc={props.handle}/>
        </>
    )
}
function Child2(props){
    const string="hello";
    console.log(props);
    const handle=(string)=>{
        console.log("in a parent", string);
        
    }
    return(
        <>
        <p>{props.data}</p>
        <button onClick={()=>props.handle(string)}>click me</button>
        </>
    )
}


