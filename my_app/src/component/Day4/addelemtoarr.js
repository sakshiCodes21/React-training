import { useState } from "react";
import React from "react";

export function Pusharr(){
    const[myarr,setmyarr]=useState([]);

    function addarr(){
        const input=prompt('enter an array');
        setmyarr([input,...myarr])
    };
    return(
        <>
<h1> Push elements to an array</h1>
<h4>Array:{myarr.join(',')}</h4>
<button onClick={addarr}>Push Element</button>

        </>
    )
}