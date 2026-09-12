import React from 'react'
import Comp3 from './Comp3'

export default function Comp2(props) {
  return (
    <div>
            <h1>Comp2:{props.u}</h1>
            <Comp3 u={props.u}/>
    </div>
  )
}
