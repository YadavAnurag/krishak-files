import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Home from '../components/Home/Home'
import Products from '../components/Products/Products'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp'

import { Link } from 'react-router-dom'
import './App.css'

const navStyle = {
  color: 'white'
}

class App extends Component{
  render(){
    return (
      <Router>
        <NavBar />
        <div className="App">
          <nav className='nav'>
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
              <Link to='/login' style={navStyle}>
                <li>Login</li>
              </Link>
              <Link to='/signup' style={navStyle}>
                <li>SignUp</li>
              </Link>
            </ul>
          </nav>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/product' component={Products}/>
            <Route path='/footer' component={Footer}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={SignUp}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}


export default App
