import React from 'react';


function Gusts(props){
  
    return <li className="responded">
             <span>{props.name}</span>
            <label>
              <input onChange={props.toggleFunc} type="checkbox" checked={props.isChecked}/> Confirmed
            </label>
            <button onClick={props.editFunc}>edit</button>
            <button>remove</button>
          </li>
        
}


 export default Gusts;
