import React from 'react';
import Gusts from './guests';


function GustsList(props){
    return <ul>
            {props.guests.map((guest,index)=> <Gusts key={index} name={guest.name} isChecked={guest.isConfirmed} toggleFunc={function(){
                return props.togglConformationFunc(index)}} 
                editFunc={function(){
                return props.toggleEdittFunc(index)
                }}/>
        )}
        </ul>
}


 export default GustsList;
