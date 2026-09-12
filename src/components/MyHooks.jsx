import React, {useState, useEffect } from 'react'


export default function MyHooks() {

    let name=useState("Akash");
    let fname=name[0];
    let setName=name[1];

    let [age,setAge]=useState("25");

    let [count,setCount]=useState(0);

    let [list,setList]=useState([67,89,78,56,45]);


    let handelClick=()=>{
        setName("Rahul");
        setAge(26);
    }

    /*
    useEffect(()=>{
        console.log("Called...");
    });

    //Without Dependency 
    //call on every render
    */ 

    /*
    useEffect(()=>{
        console.log("Called...");
    },[]);

    //With Dependency (Empty Array)
    //call once on first render
    */ 

    useEffect(()=>{
        console.log("Called...");
    },[count]);

    //call every time when count will update


  return (
    <div>
        <h1>Fname:{fname}</h1>
        <h1>Age:{age}</h1>
        <button onClick={handelClick}>Update</button> <br></br>
        <button onClick={()=>{setCount(count+1)}}>+</button> {count} 
        <button onClick={()=>{setCount(count-1)}}>-</button>

        {
            list.map((e,i)=>{
                return <p key={i}>{e}</p>
            })
        }
    </div>
  )
}
