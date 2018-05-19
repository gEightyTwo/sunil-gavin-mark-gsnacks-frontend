import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { handleSubmit } from '../actions'

import ModalLogIn from '../Components/ModalLogIn'
import ModalCreateUser from '../Components/ModalCreateUser'

import {Col, Row, Modal, Button} from 'react-materialize'


const Navbar = (props) => (
  <nav>
    <ModalLogIn />
    <ModalCreateUser />

    <div className='nav bar'>
      <div className='nav logo'>
        <img alt=''src={'./assets/nav-logo.png'} className='nav logo image'/>
      </div>
      <div className='nav links'>
        <a href="#signup" >Sign Up</a>
        <a href="#login" >Log In</a>
        <a href="#" className='hidden'>Log Out</a>

      </div>
    </div>

  </nav>
)

// const mapDispatchToProps = (dispatch) => bindActionCreators({ }, dispatch)

// export default connect(null, mapDispatchToProps)(Navbar)
export default Navbar
