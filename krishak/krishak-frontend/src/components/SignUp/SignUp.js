import React, {Component} from 'react'
import './SignUp.css'
import axios from 'axios'

const PATH_BASE = 'http://localhost:6001/api/users/'

class SignUp extends Component{

  constructor(props){
    super(props)

    this.state = {
      fullName: '', 
      email: '',
      contactNumber: '',
      password: '',
      confirmPassword: '',
      state: '',
      city: '',
      zipCode: '',
      address: '',
      stateList: [],
      cityList: [],
      apiResponse: null
    }

    this.onFormInputChange = this.onFormInputChange.bind(this)
    this.onSignUpSubmit = this.onSignUpSubmit.bind(this)
    this.postUserSignUpData = this.postUserSignUpData.bind(this)
  }

  onFormInputChange(event){
    console.log(event.target, event.target.value)
    const targetProp = event.target.name
    const value = event.target.value
    
    if(targetProp === 'fullName'){
      this.setState({
        fullName: value
      })
    }
    else if(targetProp === 'email'){
      this.setState({
        email: value
      })
    }
    else if(targetProp === 'contactNumber'){
      this.setState({
        contactNumber: value
      })
    }
    else if(targetProp === 'password'){
      this.setState({
        password: value
      })
    }
    else if(targetProp === 'confirmPassword'){
      this.setState({
        confirmPassword: value
      })
    }
    else if(targetProp === 'state'){
      this.setState({
        state: value
      })
    }
    else if(targetProp === 'city'){
      this.setState({
        city: value
      })
    }
    else if(targetProp === 'zipCode'){
      this.setState({
        zipCode: value
      })
    }
    else if(targetProp === 'address'){
      this.setState({
        address: value
      })
    }
  }
  
  postUserSignUpData(){
    
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
  onSignUpSubmit(event){
    event.preventDefault()
    
    const {
      fullName,
      email, 
      contactNumber,
      password,
      state, 
      city, 
      zipCode,
      address
    } = this.state

    console.log({
      fullName,
      email, 
      contactNumber,
      password,
      state, 
      city, 
      zipCode,
      address
    })

    this.postUserSignUpData({
      fullName,
      email, 
      contactNumber,
      password,
      state, 
      city, 
      zipCode,
      address
    })
  }

  render(){
    const { 
      fullName, 
      email, 
      state, 
      city, 
      zipCode,
      address,
      password, 
      confirmPassword,
      apiResponse
    } = this.state

    return(
      <div>
        <div>
          <SignUpForm
            fullName={fullName}
            email={email}
            state={state}
            city={city}
            zipCode={zipCode}
            address={address}
            password={password}
            confirmPassword={confirmPassword}
            onFormInputChange={this.onFormInputChange}
            onSignUpSubmit={this.onSignUpSubmit}
            apiResponse={apiResponse}
          >
          </SignUpForm>
        </div>
      </div>
    )
  } 
}

const SignUpForm = ({
  fullName,
  email,
  contactNumber,
  zipCode,
  password,
  confirmPassword,
  onSignUpSubmit,
  onFormInputChange,
  apiResponse
})=>{
  return(
    <div>
      <h2>SignUp here</h2>
      {apiResponse
      ? <h5>{apiResponse}</h5>
      : <div></div>
      }
      <form onSubmit={onSignUpSubmit}>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="fullName">Full name</label>
            <input 
              type="text" 
              className='form-control is-valid' 
              id='fullName' 
              placeholder='Full name' 
              name='fullName'
              value={fullName}
              onChange={onFormInputChange}
              required
            />
            <div className='valid-feedback'>
              Looks good!!
            </div>
          </div>
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
          <div className="col-md-4 mb-3">
            <label htmlFor="contactNumber">Contact No.</label>
            <input 
              type="text" 
              className='form-control is-valid' 
              id='contact-no' 
              name='contactNumber'
              placeholder='Contact No.' 
              value={contactNumber}
              onChange={onFormInputChange}
              required
            />
            <div className='valid-feedback'>
              Looks good!!
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="password">Create Password</label>
            <input 
              type="text" 
              className='form-control is-valid' 
              id='password' 
              name='password'
              placeholder='Create password' 
              value={password}
              onChange={onFormInputChange}
              required
            />
            <div className='valid-feedback'>
              Looks good!!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="text" 
              className='form-control is-valid' 
              id='confirmPassword' 
              placeholder='Confirm password' 
              name='confirmPassword'
              value={confirmPassword}
              onChange={onFormInputChange}
              required
            />
            <div className='valid-feedback'>
              Looks good!!
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <select 
              name="state" 
              id="state"
              className='form-control custom-select'
              onChange={onFormInputChange}
            >
              <option defaultValue='2'>Choose</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="city">City</label>
            <div className='input-group'>
              <select 
                name="city" 
                id="city"
                className='form-control custom-select'
                onChange={onFormInputChange}
                defaultValue='2'
              >
                <option defaultValue='2'>Choose</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className='invalid-feedback'>
                Not good!!
              </div>  
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="zipCode">Zip Code</label>
            <div className='input-group'>
              <input 
                type="text"
                className='form-control'
                id='zipCode'
                name='zipCode'
                placeholder='Zip code'
                value={zipCode}
                onChange={onFormInputChange}
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
            <label htmlFor="state">Address</label>
            <textarea 
              name="address" 
              id="address" 
              cols="10" rows="3" 
              className="form-control"
              onChange={onFormInputChange}
            ></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <div className="form-check">
              <input 
                className="form-check-input is-invalid"
                type='checkbox'
                value=''
                id='terms-and-condition'
                required
              />
              <label 
                htmlFor="terms-and-condition"
                className='form-check-label'
              >
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must be agree before submitting.
              </div>
            </div>
          </div>
        </div>
        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default SignUp