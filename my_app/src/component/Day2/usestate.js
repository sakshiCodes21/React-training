import React, {useState} from "react";



 
function Change() {
    const [Name, setName] = useState("sakshi");
 
    return(
    <> <h1>hello my name is {Name}!</h1>
    <button
        type="button"
        onClick={() => setName("rutuja")}
      >Change Name</button>
</>
    );
  }
 
 export function Myself() {
    const [Myself, setMyself] = useState({
      name: "Sakshi",
      age: "22",
      
    });
    return (
        <>
          <h1>My name is {Myself.name}</h1>
          <p>
            <h1>I am  {Myself.age} Years old</h1>
          </p>
        </>
      )
}
 
 
 export function Jsx() {
    const [jsxElement, setJsxElement] = useState(null);
 
    const createJsxElement = () => {
     
      const newJsxElement = <div>This is my JSX</div>;
      setJsxElement(newJsxElement);
    };
 
 
    return (
      <div>
        <button onClick={createJsxElement}>Create JSX Element</button>
        <div>
 
          {jsxElement}
        </div>
       
      </div>
    );
  }
 
 
export default  Change;
 
 
