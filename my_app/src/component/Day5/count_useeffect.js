import { useEffect, useState } from "react";
import React  from "react";

export function Countereffect(){
    const[count,setcount]=useState(0);

    const incrementcount=()=>{
       
        setcount(count+1);
        console.log("increment",count)
    }
    const decrementcount=()=>{
        
       setcount(count-1);
    }
    
    useEffect(()=>{
        console.log("count in useeffect",count)
        if(count>20){
            alert("counter reach limit to 20")
            setcount(20);
        }
        else if(count<0){
            alert("counter reach limit to 0")
            setcount(0);
        }
        

    },[count])

    return(
<>
<h4>Counter:{count}</h4>
<button style={{"color":"white","backgroundColor":"orange","height":"30px", "width":"40px"}} onClick={incrementcount}>+</button>     
<button style={{"color":"white","backgroundColor":"orange","height":"30px", "width":"40px"}}onClick={decrementcount}>-</button>    
 </>
    )
}
