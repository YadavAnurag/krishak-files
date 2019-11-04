import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


const navStyle = {
  color: 'black',
  textDecoration: 'none'
}

class NavBar extends Component{
  render(){
    return(
      <div>
        <nav className='nav'>
          <Link to='/' style={navStyle}>
              <h3>First</h3>
          </Link>
          <ul className='navLinks'>
            <Link to='/about' style={navStyle}>
              <li>About</li>
            </Link>
            <Link to='/contact' style={navStyle}>
              <li>Contact</li>
            </Link>
            <Link to='/footer' style={navStyle}>
              <li>Footer</li>
            </Link>
          </ul>
          
        </nav>
      </div>
    )
  }
}

export default NavBar