import React from 'react'
import Employee from './Employee'
import PropTypes from 'prop-types';

export default function MyProps(props) {
    //console.log(props);
let  m=34;
  return (
    <div>
        <h1>Name:{props.name}</h1>
        <h1>Age:{props.age}</h1>
        <h1>Marks:{props.mark}</h1>
        <h1>{props.a}</h1>
        <h1>{props.children}</h1>
        <Employee name={m} age="20" />
        <Employee name="Rahul" age="40" />
        
    </div>

  )
}
