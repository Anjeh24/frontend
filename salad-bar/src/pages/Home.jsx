// import React from 'react'
import React from 'react'
// import { useEffect } from 'react';
import {TiShoppingCart} from "react-icons/ti"
 import {Link} from "react-router-dom";
 import rando1 from '../mernpics/rando1.jpg';
 import rando2 from '../mernpics/rando2.jpg';
 import rando3 from '../mernpics/rando3.jpg';
 import Nav from '../components/Nav'
 
function Home() {
  return (
    <>
   
    <div>
<h1 className='title'>Deli Greens</h1>
<p className='catchphrase'>"Come for the experience, stay for the flavors and wellness........"</p>
<div className='imgdiv'><img style={{width:250, height: 250}} src={rando2} alt='salad bowl'/></div>

    </div>
    
    
    
    </>
 
  )
}

export default Home