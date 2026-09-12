import React, { useState,useEffect } from 'react'
//import data from "../assets/data.json"   //file save in src 

export default function MyJson() {
    //console.log(data);
    let [data,setData]=useState([]);

    useEffect(() => {
    // data.json save in public folder
    fetch('/data.json')
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

  return (
    <div>
        {
            data.map((p,i)=>{
                return <div key={i}>
                        <img src={p.profile} width="200"></img>
                        <p>{p.name}</p>
                        <p>{p.age}</p>
                        <p>{p.location}</p>
                    </div>
            })
        }

        {/* <img src="/images/img1.png" width="500"></img> */}

    </div>
  )
}
