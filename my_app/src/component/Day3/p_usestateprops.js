import react,{useState} from 'react';
import { Childusestate } from './c_usestateprops';

export const Parentusestate=()=>{
    const[data,setdata]=useState("click here to get child data");
return(
    <>
    <h1>
        parent component
    </h1>
    <p>Data{data}</p>
    <Childusestate data={data} setdata={setdata}/>

    </>
)
;};