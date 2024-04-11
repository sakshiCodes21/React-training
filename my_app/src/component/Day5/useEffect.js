
import { func } from "prop-types";
import React, { useEffect } from "react";
import{useState}from "react";

export function Result(){
const[num,setnum]=useState(true);
const[num1,setnum1]=useState(0);

const updateMethod=()=>{
    setnum(!num)
    console.log("inside update method");
}
useEffect(()=>{
    console.log("useEffect executed")
});

useEffect(()=>{
    console.log("useEffect executed")
},[num1])

useEffect(()=>{
    console.log("useEffect executed")

    return()=>{
        console.log("destroying..unmounting component")
    }
},[]);
return(
    <button onClick={updateMethod}>Clickhere</button>
)
}