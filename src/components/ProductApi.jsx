import React,{ useState,useEffect } from 'react'


export default function ProductApi() {
  let [product,setProduct]=useState([]);
  let [count,setCount]=useState(1);

     let getapi=async()=>{
         let rdata=await fetch(`https://fakestoreapi.com/products/${count}`);
         let data=await rdata.json();
         
         setProduct(data);
         console.log(data.rating.rate)
 
     }
 
     useEffect(()=>{
         getapi();
     },[count]);
 
     let prev=()=>{
        if(count>1){
         setCount(count-1);
        }
        
     }
     let next=()=>{
       
        setCount(count+1);
        console.log(count);
        
     }
   return (
     <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
         <div>
             <h1>Id:{product.id}</h1>
             <h2>title:{product.title}</h2>
             <h2>price:{product.price}</h2>
             <p>description:{product.description}</p>
             <h2>category:{product.category}</h2>
             <img src={product.image} width="200"></img>
             {/* <h3>rating:{product.rating.rate}</h3> */}
         </div>
 
       </div>
   )
}
