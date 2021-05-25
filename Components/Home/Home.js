import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DollCard from '../Doll/DollCard'

function Home() {
    const [dollsData,setDollsData]=useState([])
    useEffect(() => {
        const fetchDolls=async()=>{
           const res = await axios.get('http://localhost:3001/dolls')
           console.log(res);
           setDollsData(res.data)
        }
        fetchDolls()
        
    }, [])

    return (
        <div className="col-10">
            <h1>Barbies Collection</h1>
            <div className="container ">
                <div className="row">

            {dollsData.map(e=>{
                return(
                    <DollCard name={e.name} price={e.price} imgUrl={e.img_url} />

                )
            })}
                </div>
            </div>
        </div>
    )
}

export default Home
