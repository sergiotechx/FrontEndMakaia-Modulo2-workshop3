import React from 'react'
import "./header.scss"
import logo from"/public/images/logo.svg"

const Header = () => {
  return (
    <div className='nav'>
      <nav className='container'>
        <img className="logo"src={logo}/>      
         <ul>
            <li key='1'>About</li>
            <li key='2'>Careers</li>
            <li key='3'>Events</li>
            <li key='4'>Products</li>
            <li key='5'>Support</li>
         </ul>
         <div className='cuadroDeTexto' >
            <h1>IMMERSIVE EXPERIENCES THAT DELIVER </h1>
          </div>         
      </nav>
    </div>
  )
}

export default Header
