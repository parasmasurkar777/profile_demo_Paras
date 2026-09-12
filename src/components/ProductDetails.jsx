import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  let [product,setProduct]=useState([]);
    let {id}=useParams();

     let getapi=async()=>{
         let rdata=await fetch(`https://fakestoreapi.com/products/${id}`);
         let data=await rdata.json();
         
         setProduct(data);
         console.log(data.rating.rate)
     }
     useEffect(()=>{
         getapi();
     },[]);
 
     return (
     <div>
        
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
