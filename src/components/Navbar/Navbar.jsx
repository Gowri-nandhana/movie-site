import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import Search from '../Search/Search'



function Navbar() {

  
  return (
    <div className='navbar'>
      <h1>movies</h1>
      <div>
        <Search/>
      </div>
      <ul>
        <li>
           <Link to={"/"}>Home</Link>
           </li>
           <li>
           <Link to={"/Form"}>signup</Link>
           </li>
           <li>
           <Link to={"/Movies"}>Movies</Link>
           </li>
      </ul>
      
    </div>
  )
}

export default Navbar
