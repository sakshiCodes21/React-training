import { useState } from "react";
import download from '../Day3/download.jpeg'
import virat from '../Day3/virat.jpeg'

export function Imguse(){
    const [image,setimage]=useState(download);


const changeimg=()=>{
    setimage(virat);
};

return(
    <>
    <img src={image} width={300} height={300} alt="virat"/>
    <button onClick={changeimg}>Change Img</button>
    
    </>
);
}