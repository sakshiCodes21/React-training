import React, {useEffect, useState} from 'react';

export function Mergearray(){
    
    const [array1,setarray1]=useState([1,2,3,4]);
    const [array2,setarray2]=useState([5,6,7,8]);
    const [array3,setarray3]=useState([]);

const CopyArr=()=>{
    const newArr=[array1, array2];
    setarray3(newArr);
};

useEffect(()=>{
    console.log("array3",array3)
},[array3])
    return(
        <>
        <h1>Array 1:{array1.join(',')}</h1>
        <h1>Array 2:{array2.join(',')}</h1>
        <button onClick={CopyArr}>MergeARR</button>
        <h2>Merge Array:{'['+ array3.join(',')+']'}</h2>
        
        </>
    );
}
