import React from 'react'

export default function MyMapFilter() {
    let a = [45, 78, 12, 34, 89, 67, 59];

    let f = a.filter((e) => {
        return e > 50;
    })
    console.log(f);
    let newarr = f.map((e, i) => {
        return <li>{e}</li>
    })
    return (
        <div>
            <ul>
                {newarr}
            </ul>
            <hr></hr>
            {
                a.filter((e) => {
                    return e > 50;
                }).map((e) => {
                    return <li>{e}</li>
                })
            }
        </div>
    )
}
