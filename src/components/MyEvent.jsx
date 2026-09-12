import React from 'react'
export default function MyEvent() {

    let handleClick=(e,a)=>{
        console.log("Click..!!!!")
        console.log("A:"+a);
        console.log(e);
    }

    let handleClick1=()=>{
        handleClick(100);
    }
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        <button onClick={handleClick1}>Click1</button>
        <button onClick={(e)=>{handleClick(e,100)}}>Click2</button>
    </div>
  )
}
