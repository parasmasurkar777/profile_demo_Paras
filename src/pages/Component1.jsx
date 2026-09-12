import React, { createContext, useState } from 'react'
import Component2 from './Component2';
export  const UserContext=createContext();

export default function Component1() {
    let [user,setUser]=useState("Rohan");
  return (
    <UserContext.Provider value={user}  >
        <div>Component1
        <h1>hiii {user}</h1>

        <Component2 />
    </div>
    </UserContext.Provider>
   
  )
}
