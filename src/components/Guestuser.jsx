import React from 'react'

export default function Guestuser(props) {
  return (
    <div>
        <h1>Welcome to Guestuser </h1>
        <button onClick={props.data}>Login</button>
    </div>
  )
}
