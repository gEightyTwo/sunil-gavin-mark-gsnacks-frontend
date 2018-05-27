import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {loginModal,signup} from '../actions'

function handleSubmit(event,signup){
  event.preventDefault()
  const email= event.target.email.value
  const password= event.target.password.value
  const first_name= event.target.firstName.value
  const last_name= event.target.lastName.value
  const picture= event.target.picture.value
  console.log({email, password, first_name, last_name, picture});
  signup({email, password, first_name, last_name, picture})
}

const ModalCreateUser = props => (
  <div id='signup'>
    <form className='modal-form' onSubmit={event=>handleSubmit(event,props.signup)}>
    <input type="text" name='lastName' className="validate" placeholder='First Name'/>
    <input type="text" name='firstName' className="validate" placeholder='Last Name'/>
      <input type="email" name='email' className="validate" placeholder='Email Address' required/>
      <input type="password" name='password' className="validate" placeholder='Password' required/>
      <input type="text" name='picture' className="validate" placeholder='Picture URL - http://mywebsite.com/me.jpg'/>
      <button className='modal-button'>Sign Up</button>
    </form>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({loginModal, signup}, dispatch)

export default connect(null,mapDispatchToProps)(ModalCreateUser)
