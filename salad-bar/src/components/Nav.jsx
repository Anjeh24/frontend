     import React from 'react'
     import {TiShoppingCart} from "react-icons/ti"
     import { Link } from 'react-router-dom'

     function Nav() {
       return (
         <div>
    <div className='nav_bar'>
      <li><Link>About</Link></li>
      <li><Link>Menuingredients</Link></li>
      <li><Link>Login</Link></li>
      <li><Link>Ordersubmission</Link></li>
      <li className='la_cart'><Link><TiShoppingCart /></Link></li>
     
   </div> 
         </div>
       );
     }
     
     export default Nav
 