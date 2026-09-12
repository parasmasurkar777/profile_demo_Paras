import React, { useState } from 'react'

export default function Forms() {
    let [fname,setFname]=useState();
    let [lname,setLname]=useState();
    let [c,setC]=useState(0);

    let handleclick=()=>{
        setC(eval(fname)+eval(lname));

    }
    let handleclick1=()=>{
        setC(eval(fname)-eval(lname));

    }
    let handleclick2=()=>{
        setC(eval(fname)*eval(lname));

    }
  return (
    <div>
        <form>
            Fname:<input type="text" value={fname} onChange={(e)=>{setFname(e.target.value)}}></input> <br></br>
            Lname:<input type="text" value={lname} onChange={(e)=>{setLname(e.target.value)}}></input> <br></br>
            <input type="button" value="Add" onClick={handleclick}></input>
            <input type="button" value="Sub" onClick={handleclick1}></input>
            <input type="button" value="Mul" onClick={handleclick2}></input>
            <br></br>
            Result:<input type="text" value={c}></input>
        </form>
        <div>
            <p>Fname:{fname}</p>
            <p>Lname:{lname}</p>
            <p>{c}</p>
        </div>
    </div>
  )
}
