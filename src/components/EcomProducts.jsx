import React,{useState,useEffect} from 'react'

export default function EcomProducts() {
     let [product, setProduct] = useState([]);
        let getapi = async () => {
    
            let rdata = await fetch("https://dummyjson.com/products");
    
            let data = await rdata.json();
            //console.log(data.products);
            setProduct(data.products);
    
        }
    
        useEffect(() => {
            getapi();
        }, []);
        
  return (
    <div>
        {
            product.map((p)=>{
                return <div key={p.id}>
                        <h1>Id:{p.id}</h1>
                        <h1>Title:{p.title}</h1>
                        {
                            p.tags.map((t)=>{
                                return <p>{t}</p>
                            })
                        }
                        <h1>dimensions:{p.dimensions.width}</h1>

                        {
                            p.reviews.map((r)=>{
                                return <p>{r.rating} {r.comment}</p>
                            })
                        }
                    </div>
            })
        }
    </div>
  )
}
