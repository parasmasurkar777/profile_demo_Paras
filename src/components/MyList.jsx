import React from 'react'

export default function MyList() {
    let a = [5, 7, 8, 9, 4, 3];

    let data = [
        { "name": "Ajay", "age": 23, "location": "Vashi", "id": 101 },
        { "name": "Raj", "age": 20, "location": "Panvel", "id": 102 },
        { "name": "Karan", "age": 23, "location": "Thane", "id": 103 }
    ]
    a.forEach((e) => {
        console.log(e);
    })

    let newarr = a.map((e, i) => {

        return <li key={i}>{e * 2}</li>;
    })

    
    return (
        <div>
            <ul>
                {newarr}
            </ul>
            <hr></hr>
            <ul>
                {
                    a.map((e, i) => {
                        return <li key={i}>{e * 10}</li>
                    })
                }
            </ul>
            <hr></hr>

            {
                data.map((e,i)=>{
                    return <div key={e.id}>
                            <h1>Id:{e.id}</h1>
                            <h1>Name:{e.name}</h1>
                            <h1>Location:{e.location}</h1>
                        </div>
                })
            }
            
            <hr></hr>
           
          
        </div>
    )
}
