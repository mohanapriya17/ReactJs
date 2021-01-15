
import React,{useState} from 'react';

function Greet(){
   const [state, setstate] = useState(true);
    return(
    <div>
    <button onClick={()=>setstate(!state)}>
        Located At
    </button>
    {state?<h1></h1>:
    <h1>No.17,second cross,muthialpet,Pondy</h1>}
  
    </div>);
}
export default Greet