import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginModal, signupModal } from '../actions'
import ModalLoginSignup from '../Components/ModalLoginSignup'
import { withAuthentication } from '../helpers'


import ModalLogIn from '../Components/ModalLogIn'
import ModalCreateUser from '../Components/ModalCreateUser'

import {Col, Row, Modal, Button} from 'react-materialize'


const Navbar = (props) => (
  <nav>

    <ModalLoginSignup />

    <div className='nav bar'>
      <div className='nav logo'>
        <img alt=''src={'./assets/nav-logo.png'} className='nav logo image'/>
      </div>
      <div className='nav links'>
        <a href="#lsmodal" onClick={props.signupModal}>Sign Up</a>
        <a href="#lsmodal" onClick={props.loginModal}>Log In</a>
        <a href="#" className='hidden'>Log Out</a>

      </div>
    </div>

  </nav>
)

const mapDispatchToProps = dispatch => bindActionCreators({loginModal, signupModal}, dispatch)

export default connect(null,mapDispatchToProps)(withAuthentication(Navbar))
