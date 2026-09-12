import React, { createContext, useState } from 'react'
//import Comp2 from './Comp2';
import Comp3 from './Comp3';
export const UserContext=createContext();

export default function Comp1() {
    let [user,setUser]=useState("Rahul");
  return (
    <div>
        <UserContext.Provider value={user}>
              <h1>Comp1:{user}</h1>
                <Comp3 />
        </UserContext.Provider>
      
        {/* <Comp2 u={user}/> */}

    </div>
  )
}
