import React from 'react'
import PropTypes from 'prop-types'
export default function Employee(props) {
  return (
    <div>
        <h1>Name:{props.name}</h1>
        <h1>Age:{props.age}</h1>
    </div>
  )
}


Employee.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
};