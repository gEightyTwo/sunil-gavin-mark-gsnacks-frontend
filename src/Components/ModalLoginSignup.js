import React from 'react'
import {Modal} from 'react-materialize'
import {connect} from 'react-redux'
import ModalLogIn from './ModalLogIn'
import ModalCreateUser from './ModalCreateUser'

const ModalLoginSignup = props => (
  <Modal id='lsmodal' actions='' className='modal'
    style={{height: 'auto'}}
  >
    {(props.modalStatus === 'login') ? (<ModalLogIn />) : null}
    {(props.modalStatus === 'signup') ? (<ModalCreateUser />) : null}
  </Modal>
)

const mapStateToProps = ({modalStatus}) => ({modalStatus})
export default connect(mapStateToProps)(ModalLoginSignup)
