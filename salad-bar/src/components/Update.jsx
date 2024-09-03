import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { useEffect } from 'react';


function Update() {



const [greensData, setGreensData] = useState([]);
useEffect(() => {
    axios.get(`http://localhost:5050/greens/8`)
    .then((theData) => {
        console.log(theData);
        setGreensData(theData.data)
    })
}, [])

function updates(){
    axios.put(`http://localhost:5050/greens/8`, {
        name: "Bok choy"
    })
       .then((response) => {
        setGreensData(response.data);
       });  
}
  if (!greensData) return "post request failed!"
  return (
    <div>
        <h1>Update</h1>
 <h4>{greensData.name}</h4>
 <button onClick={updates}>Update data</button>



        </div>
  )
}

export default Update