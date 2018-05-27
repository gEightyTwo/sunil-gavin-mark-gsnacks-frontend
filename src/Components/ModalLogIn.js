import React from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'

const ModalLogIn = () => (
  <div>
    <img alt=''src={'./assets/nav-logo.png'} className='modal-image'/>
    <form className='modal-form'>
      <input type="email" className="validate" placeholder='Email Address'/>
      <input type="password" className="validate" placeholder='Password'/>
      <button className='modal-button'>Log In</button>
    </form>
  </div>
)

export default ModalLogIn
