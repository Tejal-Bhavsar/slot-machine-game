import React from 'react';
import Matching from './Matching';
import Notmatching from './Notmatching';

const Slot = (props) => {
    // let x = '😄';  before obxject destructuring
    // let y = '😄';
    // let z = '😄';
  
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

    let {x,y,z} = props;


    return ( 
     ( (x === y)  && (y === z) ) ?  <Matching x={x} y={y} z={z}/> : <Notmatching x={x} y={y} z={z}/> 
    );
    
}
      

  export default Slot;