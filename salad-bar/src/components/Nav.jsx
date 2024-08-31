     import React from 'react'
     import {TiShoppingCart} from "react-icons/ti"
     import { Link } from 'react-router-dom'
     

   
   function Nav() {
     return (
       <nav className='nav'>
        <a href="/" className='landing'>Home</a>
        <ul>
           <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/menu">Menu</a>
            </li>
            <li>
            <a href="/login">Login</a>
            </li>
            <li>
            <a href="/orders">View Order</a>
            </li>
            <li>
            <a href="/viewcart"><TiShoppingCart/></a>
            
          </li>
        </ul>
       </nav>
     )
   }

   

   
   
   export default Nav
 