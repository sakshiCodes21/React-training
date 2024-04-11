import React, { useState } from "react";

export function Key(){
    const[key,setkey]=useState('');



    return(
        <>
        <label>
            <input onKeyUp={(Event)=>setkey(Event.key)} onKeyDown={()=>setkey('')}/>
        </label>
        {key && <p>You pressed: {key}</p>}
        </>
    );

}