import React,{useState} from "react";
import Childrencomp from "./children";
export function ParentComp(){
    let array=[1,2]
    return(
        <Childrencomp array={array}><p>my array is{array.toString()}</p></Childrencomp>
    )
}
