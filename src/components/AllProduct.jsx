import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function AllProduct() {
    let [product, setProduct] = useState([]);
    let getapi = async () => {

        let rdata = await fetch("https://fakestoreapi.com/products");

        let data = await rdata.json();
        //console.log(data);
        setProduct(data);

    }

    useEffect(() => {
        getapi();
    }, []);

    return (
        <div>
            <div className="row">
                {
                    product.map((p) => {
                        return <div key={p.id} className=" col-md-4 col-lg-4 col-xl-4">
                            <div className="cart">
                                <Link to={`/product/${p.id}`} style={{ color: "black", textDecoration: "none" }}>
                                    <div>
                                        <img src={p.image} width="200"></img>
                                    </div>
                                    <div>
                                        <h1>Id:{p.id}</h1>
                                        <h2>title:{p.title}</h2>
                                        <h2>price:{p.price}</h2>
                                        <p>description:{p.description}</p>
                                        <h2>category:{p.category}</h2>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    )
}
