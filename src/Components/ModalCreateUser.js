import React from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'


const ModalCreateUser = () => (
  <Modal id='signup' actions='' className='modal'>
    <form className='modal-form'>
    <input type="text" class="validate" placeholder='First Name'/>
    <input type="text" class="validate" placeholder='Last Name'/>
      <input type="email" class="validate" placeholder='Email Address'/>
      <input type="password" class="validate" placeholder='Password'/>
      <input type="text" class="validate" placeholder='Picture URL - http://mywebsite.com/me.jpg'/>
      <button className='modal-button'>Sign Up</button>
    </form>
  </Modal>
)


export default ModalCreateUser
