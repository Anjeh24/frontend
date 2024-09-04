import React, { useEffect } from 'react'
import { useState } from 'react'
 import axios from 'axios'
 import Read from '../components/Read';
import Update from '../components/Update';
import Delete from '../components/Delete';

function Menu() {

 const [postgreens, setpPostgreens] = useState('');
 const [theid, setTheid] = useState('');
 const [thecategory, setThecategory] = useState('');
 const [theprice, setTheprice] = useState('');


console.log(postgreens);
console.log(theid);
console.log(thecategory);
console.log(theprice);
    const addGreens = () => {
      axios.post(`http://localhost:5050/greens`, {postgreens, theid, thecategory, theprice})
    }

  return (
    <div>
      <h2>Build your power bowl</h2>



      <div>
        
        <label>Enter new greens</label><br/>
        <input type="text" _id='theid' placeholder='Enter an Id' onChange={(e) => setTheid(e.target.value)}/><br/>
        <input type="text" name='postgreens'  placeholder='Choose your ingredients' onChange={(e) => setpPostgreens(e.target.value)}/><br/>
        <input type="text" category='thecategory' placeholder='category' onChange={(e) => setThecategory(e.target.value)}/><br/>
        <input type="text" price='theprice' placeholder='price' onChange={(e) => setTheprice(e.target.value)} /><br/>


      </div>
      <button type='button' onClick={addGreens}>Add</button> {/**/}

<Read/>
<Update/>
<Delete/>
    </div>                                 
  )
}

export default Menu