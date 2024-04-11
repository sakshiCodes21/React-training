import { useState } from "react";
import React from "react";

export function Counter(){
    const[count,setcount]=useState(0);

    const increment=()=>{
    
        if(count===20){
            setcount(0);
        }
        else{
            setcount(count+2);
        }
    };
    const decrement=()=>{
        
        if(count===0){
            setcount(20);
        }
        else{
            setcount(count-2);
        }
    };
return(
    <>
    <div>
        <h1>
            counter
        </h1>
        <p>Count:{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
    </>
);
}