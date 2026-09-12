import React from 'react'
import "../assets/Home.css";
export default function Home() {
  let s1={
    color:"red",
    backgroundColor:"yellow",

  }
  let s2={
    textAlign:"center"
  }
  
  let speed=60;
  let risk;
  let bg={
    backgroundColor:""
  }
  if(speed>100)
  {
    risk="High";
    bg.backgroundColor="red"

  }
  else if(speed>80)
  {
    risk="mid";
    bg.backgroundColor="orange";
  }
  else{
    risk="low";
    bg.backgroundColor="green";
  }


  return (
    <div className='container'>
        <h1 style={{...s1,...s2,...{fontSize:"60px"}}}>This is Home Page</h1>
        <p className="c1">Welcome to Home Page</p>
        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sit, voluptatum quo natus ipsam architecto! Quam commodi voluptatibus non quos porro vero, obcaecati nesciunt aliquid rerum itaque, minus repellat quidem.</h2>
    <h1 >My bike speed is {speed} and you are in <span style={bg}>{risk}</span> Risk</h1>
    </div>
  )
}
