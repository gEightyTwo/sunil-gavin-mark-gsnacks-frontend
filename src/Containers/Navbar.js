import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { handleSubmit } from '../actions'

import ModalLogin from '../Components/ModalLogin'
import ModalCreateUser from '../Components/ModalCreateUser'

const Navbar = (props) => {
  <ModalLogin />
  <ModalCreateUser />
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ }, dispatch)

export default connect(null, mapDispatchToProps)(Navbar)
