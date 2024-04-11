import React from "react";
import PropTypes from 'prop-types';

function Check(props){

// return <h1>{age}</h1>
// return <h1>{name}</h1>
return(
    <><h1>Hello:{props.age}</h1>
      <h1>Hello:{props.name}</h1>   
      <h1>Hello:{props.array}</h1>
     

    
    </>
);}

 Check.propTypes = {
    age:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    array:PropTypes.array.isRequired
 
  };
  
  export default Check;