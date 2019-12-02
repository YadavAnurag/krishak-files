import React, {Component} from 'react'
import './Login.css'
import axios from 'axios'

const PATH_BASE = 'http://localhost:6001/api/users'

class Login extends Component{

  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      apiResponse: null
    }

    this.onFormInputChange = this.onFormInputChange.bind(this)
    this.onLoginSubmit = this.onLoginSubmit.bind(this)
    this.sendUserLoginData = this.sendUserLoginData.bind(this)
  }

  onFormInputChange(event){
    console.log(event.target, event.target.value)
    const targetProp = event.target.name
    const value = event.target.value
    
    if(targetProp === 'email'){
      this.setState({
        email: value
      })
    }
    else if(targetProp === 'password'){
      this.setState({
        password: value
      })
    }
  }
  
  sendUserLoginData(){
    axios.post(PATH_BASE, {
      email: this.state.email,
      password: this.state.password
    })
    .then((res)=>{
      console.log(res)
      this.setState({
        apiResponse: res.data
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  onLoginSubmit(event){
    event.preventDefault()
    
    const {
      email, 
      password,
    } = this.state

    console.log({
      email, 
      password,
    })

    this.sendUserLoginData({
      email, 
      password,
    })
  }

  render(){
    const { 
      email, 
      password, 
      apiResponse
    } = this.state

    return(
      <div>
        <div>
          <LoginForm
            email={email}
            password={password}
            onFormInputChange={this.onFormInputChange}
            onLoginSubmit={this.onLoginSubmit}
            apiResponse={apiResponse}
          >
          </LoginForm>
        </div>
      </div>
    )
  } 
}

const LoginForm = ({
  email,
  password,
  onLoginSubmit,
  onFormInputChange,
  apiResponse
})=>{
  return(
    <div>
      <h2>Login here</h2>
      {apiResponse
      ? <h5>{apiResponse}</h5>
      : <div></div>
      }
      <form onSubmit={onLoginSubmit}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="email">Email</label>
            <div className='input-group'>
              <div className="input-group-prepend">
                <span 
                  className="input-group-text"
                  id='input-group-prepend'>
                    @
                </span>
              </div>
              <input 
                type="text"
                className='form-control is-invalid'
                id='email'
                name='email'
                placeholder='Email'
                onChange={onFormInputChange}
                value={email}
                required
              />
              <div className='invalid-feedback'>
                Not good!!
              </div>  
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="password">Password</label>
            <input 
              type="text" 
              className='form-control is-valid' 
              id='password' 
              name='password'
              placeholder='Password' 
              value={password}
              onChange={onFormInputChange}
              required
            />
            <div className='valid-feedback'>
              Looks good!!
            </div>
          </div>
        </div>
        <button className='btn btn-primary' type='submit'>Login</button>
      </form>
    </div>
  )
}


export default Login







// import React, { Component } from 'react'
// import config from './../../config/config'
// import util from './../../util/util'
// import './Login.css'
// import axios from 'axios'

// const PATH_BASE = config.LOGIN_PATH_BASE

// class Login extends Component{
//   constructor(props){
//     super()

//     this.state = {
//       username: '',
//       password: '',
//       loginResponse: ''
//     }

//     this.onUsernameChange = this.onUsernameChange.bind(this)
//     this.onPasswordChange = this.onPasswordChange.bind(this)
//     this.onLoginSubmit = this.onLoginSubmit.bind(this)
//     this.sendUserLoginData = this.sendUserLoginData.bind(this)
//   }

//   onUsernameChange(event){
//     this.setState({
//       username: event.target.value 
//     })
//   }
//   onPasswordChange(event){
//     this.setState({
//       password: event.target.value
//     })
//   }
  
//   sendUserLoginData({username, password}){
//     axios({
//       method: 'post',
//       url: PATH_BASE,
//       data: {
//         username: username,
//         password: password
//       }
//     })
//       .then((res)=>{
//         console.log(res)
//         this.setState({
//           loginResponse: res.data
//         })
//       })
//       .catch((error)=>{
//         console.log(error)
//       })
//   }
//   onLoginSubmit(event){
//     event.preventDefault()

//     const {
//       username,
//       password
//     } = this.state
//     this.sendUserLoginData({username, password})

//   }
//   render(){
//     const {
//       username,
//       password,
//     } = this.state

//     return(
//       <div>
//         <div>
//           <LoginForm
//             username={username}
//             password={password}
//             onUsernameChange={this.onUsernameChange}
//             onPasswordChange={this.onPasswordChange}
//             onLoginSubmit={this.onLoginSubmit}
//           >
//           </LoginForm>
//         </div>
//       </div>
//     )
//   }
// }

// const LoginForm = ({
//   username,
//   password,
//   onLoginSubmit,
//   onUsernameChange,
//   onPasswordChange,
//   userAddedResponse
// })=>{
//   return(
//     <div>
//       <h2>Login here</h2>
//       {userAddedResponse
//       ? <h5>{userAddedResponse}</h5>
//       : <div></div>
//       }
//       <form onSubmit={onLoginSubmit}>
//         <input type='text' value={username} onChange={onUsernameChange} name='username' placeholder='username'/>
//         <br />
//         <input type='text' value={password} onChange={onPasswordChange} name='password' placeholder='password'/>
//         <br/>
//         <input type='submit' />
//       </form>
//     </div>
//   )
// }

// export default Login