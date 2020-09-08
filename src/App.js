import React from 'react';
import Slot from './Slotmachine';
 
const App = () => {
  return <>
   <h1 className="heading_style" >  Welcome to <span style={{fontWeight : "bold"}}>Slot Machine Game </span>  </h1>
   <div className="slotmatch"> 
     <Slot x='😄' y='💮' z='⚽️'/>
     <hr/>
     <Slot x='😄' y='😄' z='😄' />
     <hr/>
     <Slot x='😈' y='⛄️' z='😄'/>
     <hr/>
     <Slot x='🍎' y='🍎' z='🍎'/>
     <hr/>
   </div>
   
  </>;
};

export default App;
