import React, { Component } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


class Footer extends Component{
  render(){
    return(
      <div className='container-fluid footer'>
        <div className='row'>
          <div className='col-lg-6 col-md-3 col-sm-6 col-xs-12'>
            <div className="footer-heading">
              <span>About Us</span>
            </div>
            <Link to='/about'>
                <span>Contact Us</span>
            </Link>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-xs-12'>2</div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-xs-12'>3</div>
          <div className='col-lg-2 col-md-3 col-sm-6 col-xs-12'>4</div>
        </div>
      </div>
    )
  }
}

export default Footer