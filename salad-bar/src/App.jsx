import React from 'react'
//import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/About'
import Menu from './pages/Menu'
import Order from './pages/Order'
//import Viewcart from '../src/pages/Viewcart'
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './components/Footer'

function App() {
    //trying to build file paths
    console.log(window.location)
    let anypage
    switch (window.location.pathname){
        case "/":
            anypage = <Home/>
            break
            case '/about':
                anypage = <About/>
            break
            case '/menu':
                anypage = <Menu/>
                break
                case '/login':
                    anypage = <Login/>
                    break
                    case '/orders':
                        anypage = <Order/>
                        break
                        case '/viewcart':
                            anypage = <Order/>
                            break
    }
  return (
    <>
    <Nav/>
    {anypage} {/**code to render filepath contents */}
    <Footer/>
    </>
    
  )
}

export default App