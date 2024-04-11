import logo from './logo.svg';
import './App.css';

import React from 'react';
// import Mergearray from '../src/component/Day4/mergearray.js';
// import Check from './component/Day1/validationprops';
import { Imguse } from './component/Day3/img_usestate.js';
import { Data } from './component/Day3/nestedobj.js';
import { Parentusestate } from './component/Day3/p_usestateprops.js';
import { Mergearray } from './component/Day4/mergearray.js';
import { Pusharr } from './component/Day4/addelemtoarr.js';
import { Counter } from './component/Day4/counterusestate.js';
import { Result } from './component/Day5/useEffect.js';
import { Countereffect } from './component/Day5/count_useeffect.js';
import { Mainparent } from './component/Day4/nestedCompo.js';
// import { FetchAPI } from './component/Day5/api.js';
import { SetTime} from './component/Day6/settimeout.js';
import  MyForm1  from './component/Day7/Eventhandling.js';
import MyForm2 from './component/Day7/focus&click.js';
import CopyComponent from './component/Day7/oncpy.js';
import Doubleclick from './component/Day7/doubleclick.js';
import Toggle from './component/Day7/mouseevents.js';
import { SetInterval } from './component/Day6/interval.js';
import { Key } from './component/Day7/keyevents.js';






// import { Call1,Call2 } from './component/Day2/exportimport';
// import { Parent} from './component/Day2/childtoparent';
// import Change, { Myself,Jsx } from './component/Day2/usestate';
// import  {ParentComp}  from './component/Day3/parentc';

// class MyComponent extends React.Component{
//   constructor()
//   {
//     super();
//     console.log("my constructor");
//   }
// componentDidMount(){
//   console.log("mounted");
// }
// componentDidUpdate(prevProps,prevState){
//   console.log("Updated");
// }
// componentWillUnmount(){
//   console.log("Unmounted");
// }
function MyComponent(){
 
    console.log("rendering");
    return (
      <> 
      <Key/>
      <MyForm1/>
      <hr></hr>
      <CopyComponent/>
      <Doubleclick/>
      <Toggle/>
      <hr></hr>
      <MyForm2/>
   {/* <FetchAPI/> */}
   <hr></hr>
   <SetTime/>
   <hr></hr>
   <SetInterval/>

      <Imguse/>
      <hr></hr>
      <Countereffect/>
      <hr></hr>
      <Result/>
      <hr></hr>
      <Data/>
      <hr></hr>
      <Parentusestate/>
      <hr></hr>
      <Mergearray/>
      <hr></hr>
      <Pusharr/>
      <hr></hr>
      <Counter/>
      <hr></hr>
      <Mainparent/>
      </>
    
      
      
    )
  }

export default MyComponent;


