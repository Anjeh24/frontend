import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { useEffect } from 'react';


function Delete() {

    const [greensData, setGreensData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5050/greens/8`)
        .then((theData) => {
            console.log(theData);
            setGreensData(theData.data)
        })
    }, [])

    function justdeleteit(){
        axios
            .delete(`http://localhost:5050/greens/8`)
            .then(() => {
                alert("deleted");
                setGreensData(null)
            });
    }
if (!greensData) return "It has been deleted"
  return (
    <div>
    <h1>Delete</h1>

<h4>{greensData.name}</h4>
<button onClick={justdeleteit}>Delete</button>
    </div>
  )
}

export default Delete