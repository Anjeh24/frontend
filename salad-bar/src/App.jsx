import React from 'react'
// import { useState } from 'react'
// import {useState, useEffect} from 'react'
import Landingpage from './components/Landingpage'
import vegdoddle from './mernpics/vegdoddle.jpg'
 import Nav from './components/Nav.jsx'
 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
  import './App.css'
// import { Router } from 'react-router-dom'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Loginpg from './components/Loginpg.jsx'
import Ordersubmision from './components/Ordersubmission.jsx'

function App() {
  

  return (
    <>
    <div className='mainapp_div'>
      <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact Component={About}/>
        <Route path='/login' Component={Loginpg}/>
        <Route path='/menu' Component={Menu}/>
        <Route path='/orders' Component={Ordersubmision}/>
        <Route path='/viewcart' Component={Ordersubmision}/>
      </Switch>
      </Router>

      <Landingpage/>

      </div>
      
    </>
  )
}

export default App
