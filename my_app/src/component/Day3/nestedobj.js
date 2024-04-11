import { useState } from "react";

export function Data(){
    const [person,setperson]=useState({
        name:"Sakshi",
        age:"24",
        salary:"400000"
    });

    function handlepersonname(e)
    {
        setperson({...person,name:e.target.value});

    }
    function handlepersonage(e)
    {
        setperson({...person,age:e.target.value});

    }
    function handlepersonsalary(e)
    {
        setperson({...person,salary:e.target.value});

    }
         return(
    <>
    <label>
        Name:
        <input value={person.name} onChange={handlepersonname}/>

    </label>
    <label>
        age:
        <input value={person.age} onChange={handlepersonage}/>

    </label>
    <label>
        salary:
        <input value={person.salary} onChange={handlepersonsalary}/>

    </label>
    <p>
        {person.name}{' '}
        {person.age}{ ' '}
        {person.salary}{' '}
    </p>
    </>
        
          

    );
}


