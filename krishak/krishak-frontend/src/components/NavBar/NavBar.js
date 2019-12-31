import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


class NavBar extends Component{
  render(){
    return(
      <div className='sticky navigation-bar p-1'>
        <div className='d-inline-block navigation-bar-brand-div'>
          <a href="/" className="navigation-bar-brand-a">Krishak</a>
        </div>
        <div className="d-inline-block px-2 navigation-bar-form-div">
          <input type="search" className="navigation-bar-input"/>
        </div>
        <div className="d-inline-block navigation-bar-right-div">
          <ul className='d-inline-block'>
            <li className='d-inline-block'>
              <a href="/about" className="navigation-bar-brand-a">
                Kri
              </a>
            </li>
            <li className='d-inline-block'>
              <a href="/about" className="navigation-bar-brand-a">Kri</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default NavBar