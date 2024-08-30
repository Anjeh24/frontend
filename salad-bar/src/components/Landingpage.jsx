// import React from 'react'
import React from 'react'
// import { useEffect } from 'react';
import {TiShoppingCart} from "react-icons/ti"
 import {Link} from "react-router-dom";
 import rando1 from '../mernpics/rando1.jpg';
 import rando2 from '../mernpics/rando2.jpg';
 import rando3 from '../mernpics/rando3.jpg';
 import Nav from '../components/Nav'
 
function Landingpage() {
  return (
    <>
    
    <div className='title'>
        <h1 className='headcol'>Deli Greens</h1>
        <h2 className='headcol'>"Come for the experience, stay for the flavor and wellness....."</h2>
      </div>

      <div className='heroim'>
      <img  className='img1' src={rando2} alt="produce" style={{width: '30%', height: '15%'}} />
        {/* <ul className='ulfooter'> */}
            {/* <li><img src={rando1} alt="produce" style={{width: '15%', height: '15%'}}/></li>
            <li><img src={rando2} alt="produce" style={{width: '15%', height: '15%'}} /></li>
            <li><img src={rando3} alt="produce" style={{width: '15%', height: '15%'}}/></li> */}
           
        {/* </ul> */}
      </div>

       <div className='foot_div'>
      <footer className='the_footer'><h6>Made with &#x2764;&#xfe0f; by Anjeh Mbah </h6></footer>
      </div> 
    
    
    
    
    </>
 
  )
}

export default Landingpage