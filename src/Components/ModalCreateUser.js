import React from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'

const ModalCreateUser = () => (
  <div id='signup'>
    <form className='modal-form'>
    <input type="text" className="validate" placeholder='First Name'/>
    <input type="text" className="validate" placeholder='Last Name'/>
      <input type="email" className="validate" placeholder='Email Address'/>
      <input type="password" className="validate" placeholder='Password'/>
      <input type="text" className="validate" placeholder='Picture URL - http://mywebsite.com/me.jpg'/>
      <button className='modal-button'>Sign Up</button>
    </form>
  </div>
)

export default ModalCreateUser
