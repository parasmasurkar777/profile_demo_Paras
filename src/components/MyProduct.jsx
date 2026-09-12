import React from 'react'

export default function MyProduct() {
    let product=[
        {"id":1,"price":5000,"name":"TV"},
        {"id":2,"price":15000,"name":"Mobile"},
        {"id":3,"price":19000,"name":"AC"},
        {"id":4,"price":9000,"name":"laptop"},    
    ]
  return (
    <div>
        {
            product.filter((p)=>{
                return p.price>10000;
            }).map((p)=>{
                return <div key={p.id}>
                        <h1>Id:{p.id}</h1>
                        <h1>Name:{p.name}</h1>
                        <h1>Price:{p.price}</h1>
                    </div>
            })
        }
    </div>
  )
}
