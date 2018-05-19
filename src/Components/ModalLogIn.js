import React from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'


const ModalLogIn = () => (
<Modal id='login' actions='' className='modal'>
  <img alt=''src={'./assets/nav-logo.png'} className='modal-image'/>
  <form className='modal-form'>
    <input type="email" class="validate" placeholder='Email Address'/>
    <input type="password" class="validate" placeholder='Password'/>
    <button className='modal-button'>Log In</button>
  </form>
</Modal>
)


export default ModalLogIn
