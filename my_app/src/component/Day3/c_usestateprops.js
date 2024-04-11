import React from "react";

export const Childusestate=({data,setdata})=>{
const handleData=()=>{
    setdata('data from child');
};
return(
    <>
<h2>
    child data:
</h2>
<p>
    parent data:{data}
</p>
<button onClick={handleData}>Call Parent data</button>

    </>
);
};