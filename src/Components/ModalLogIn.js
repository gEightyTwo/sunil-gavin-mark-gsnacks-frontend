import React, {Component} from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'
import { request, AuthenticationService } from '../helpers'
import { withRouter } from 'react-router-dom'


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
      this.props.history.push('/')
    })
    .catch(error => {
      this.setState({showErrorMessage: true})
    })
  }


  render = () => (
    <Modal id='login' actions='' className='modal'>
      <img alt=''src={'./assets/nav-logo.png'} className='modal-image'/>
      <form className='modal-form' onSubmit={this.handleSignIn}>
        <input name='inputEmail' type="email" className="validate" placeholder='Email Address' required/>
        <input name='inputPassword' type="password" className="validate" placeholder='Password' required/>
        <button className='modal-button'>Log In</button>
      </form>
    </Modal>
  )
}

export default withRouter(ModalLogIn)
