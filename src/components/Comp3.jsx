import React, { useContext } from 'react'
    import { UserContext } from './Comp1';
    
export default function Comp3(props) {
    let user=useContext(UserContext);
  return (
    <div>
        {/* <h1>Comp3: {props.u}</h1> */}
        <h1>Name:{user}</h1>
    </div>
  )
}
