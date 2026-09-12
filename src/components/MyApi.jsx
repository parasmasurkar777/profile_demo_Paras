import React, { useEffect, useState } from 'react'

export default function MyApi() {
    let [product,setProduct]=useState([]);
    let getapi=async()=>{
        let rdata=await fetch("https://fakestoreapi.com/products/1");
        //let rdata=await fetch("https://fakestoreapi.com/products");
        //let rdata=await fetch("https://jsonplaceholder.typicode.com/todos/");

        let data=await rdata.json();
        //console.log(data);
        setProduct(data);

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
        </div>

        {/* <div className="row">
        {
            product.map((p)=>{
                return <div key={p.id} className=" col-md-4 col-lg-4 col-xl-4">
                        <h1>Id:{p.id}</h1>
                        <h2>title:{p.title}</h2>
                        <h2>price:{p.price}</h2>
                        <p>description:{p.description}</p>
                        <h2>category:{p.category}</h2>
                        <img src={p.image} width="200"></img>
                    </div>
            })
        }
        </div> */}



        {/* <div>
            {
                product.map((p)=>{
                    return <div>
                            <h1>UserId:{p.userId}</h1>
                            <h1>Id:{p.id}</h1>
                            <h1>Title:{p.title}</h1>
                            <h1>Completed:{p.completed?"Yes":"No"}</h1>
                            <br></br>
                        </div>
                })
            }
        </div> */}
    </div>
  )
}
