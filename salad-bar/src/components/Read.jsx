import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function Read() {
const [greensData, setGreensData] = useState([]);
useEffect(() => {
    axios.get(`http://localhost:5050/greens`)
    .then((theData) => {
        console.log(theData);
        setGreensData(theData.data)
    })
}, [])//array dependendency to stop endless fetch/get

  return (
    <div>
      <h1>Read</h1> 
    
    <table>
        <tr>
    <th>Name</th>
    <th>Category</th>
    <th>Price</th>
    
  </tr>
  <tbody>
  {greensData.map((data) => {
        return(
  <tr>
   
    <td>{data.name}</td>  {/**mapping key values throughout data */}
    <td>{data.category}</td>
    <td>{data.price}</td>
    
    
        

  </tr>
  )
})}
</tbody>
    </table>


    </div>
  )
}

export default Read