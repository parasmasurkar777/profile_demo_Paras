import React, { useContext } from 'react'
import { UserContext } from './Component1';
export default function Component2() {
    const user=useContext(UserContext);
  return (
    <div>Component2
        <h1>{user}</h1>
    </div>
  )
}
