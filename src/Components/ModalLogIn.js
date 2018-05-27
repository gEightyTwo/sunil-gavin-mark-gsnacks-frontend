import React, {Component} from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'
import { request, AuthenticationService } from '../helpers'


class ModalLogIn extends Component {

  constructor(props){
    super(props)
    this.state = {
      showErrorMessage: false
    }
  }


  handleSignIn = event => {
    event.preventDefault()
    const { inputEmail, inputPassword } = event.target
    request('/auth/token','post', {
      email: inputEmail.value,
      password: inputPassword.value })
    .then(response => {
      this.setState({ showErrorMessage: false })
      localStorage.setItem('token', response.data.token)
      return request('/auth/token')
    })
    .then(response => {
      AuthenticationService.setAuthState(response.data)
      return request('/users')
    })
    .then(response => {
      console.log(AuthenticationService.getAuthState());
      console.log(response.data.data);
        const authState = AuthenticationService.getAuthState()
        const activeUser = response.data.data.find(el => el.id === authState.id)
        AuthenticationService.setAuthState(activeUser)
        console.log(`Active User: ${activeUser.first_name} ${activeUser.last_name}`)
        window.$(`#lsmodal`).modal('close');
      })
    .catch(error => {
      this.setState({showErrorMessage: true})
    })
  }


  render = () => (
    <div>
      <img alt=''src={'./assets/nav-logo.png'} className='modal-image'/>
      <form className='modal-form' onSubmit={this.handleSignIn}>
        <input type="email" name='inputEmail' className="validate" placeholder='Email Address'/>
        <input type="password"  name='inputPassword' className="validate" placeholder='Password'/>
        <button className='modal-button'>Log In</button>
        <div className={ !this.state.showErrorMessage ? 'login-auth-error login-hide-auth-error' : 'login-auth-error' }>
          Invalid Username or Password
        </div>
      </form>
    </div>
  )

}

export default ModalLogIn
