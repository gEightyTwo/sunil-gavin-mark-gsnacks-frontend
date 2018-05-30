import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginModal, signupModal } from '../actions'
import ModalLoginSignup from '../Components/ModalLoginSignup'
import { withAuthentication, AuthenticationService } from '../helpers'

import ModalLogIn from '../Components/ModalLogIn'
import ModalCreateUser from '../Components/ModalCreateUser'

import {Col, Row, Modal, Button} from 'react-materialize'

const Navbar = ({authState, signupModal, loginModal}) => (
  <nav>
    <ModalLoginSignup />
    <div className='nav bar'>
      <div className='nav logo'>
        <a href='/'><img alt=''src={'./assets/nav-logo.png'} className='nav logo image'/></a>
      </div>
        {authState
          ?
            <div className='nav links'>
              <div className='nav-user-image' style={{backgroundImage:`url('${authState.picture}')`}}></div>
              <h1 className='nav-user-name'>{authState.first_name} {authState.last_name}</h1>
              <a className='logout' onClick={handleLogout}>Log Out</a>
            </div>
          :
            <div className='nav links'>
              <a href="#lsmodal" onClick={signupModal}>Sign Up</a>
              <a href="#lsmodal" onClick={loginModal}>Log In</a>
            </div>
        }
    </div>
  </nav>
)

const handleLogout = (setAuthState) => {
    localStorage.removeItem('token')
    AuthenticationService.setAuthState(null)
}

const mapDispatchToProps = dispatch => bindActionCreators({loginModal, signupModal}, dispatch)
export default connect(null,mapDispatchToProps)(withAuthentication(Navbar))
