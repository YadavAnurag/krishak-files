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

import './App.css'



class App extends Component{
  render(){
    
    return (
      <Router>
        <div className="App">
          <p>something</p>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/product' component={Products}/>
            <Route path='/footer' component={Footer}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={SignUp}/>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App
