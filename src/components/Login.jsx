import React, { useState } from 'react'
import PrimeUser from './PrimeUser';
import Guestuser from './Guestuser';

export default function Login() {
    let [islogged,setIslogged]=useState(true);

    let logout=()=>{
        setIslogged(false);
    }
   let login=()=>{
    setIslogged(true);
   }
  return (
    <div>
        {
           /* (()=>{

                if(islogged)
                {
                    return <PrimeUser name="Scott" data={logout}/>
                }
                else{
                   return  <Guestuser data={login}/>
                }
            })()*/
        }

        {
            //(islogged)?<PrimeUser name="Scott" data={logout}/>:<Guestuser data={login}/>
        }

        {
            islogged && <PrimeUser name="Scott" data={logout}/>
        }

       
    </div>
  )
}
