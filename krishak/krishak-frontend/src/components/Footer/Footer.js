import React, { Component } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


class Footer extends Component{
  render(){
    return(
      <div>
        <h1>something</h1>
        <div className='row footer'>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
            <Link to='/'>
                <span>About</span>
            </Link>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>2</div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>3</div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>4</div>
        </div>
      </div>
    )
  }
}

export default Footer