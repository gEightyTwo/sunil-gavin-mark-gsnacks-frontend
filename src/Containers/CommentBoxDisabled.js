import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginModal, signupModal } from '../actions'

import {Col} from 'react-materialize'

const CommentBoxDisabled = (props) => (
  <Col s={12} l={5}>
    <div className='message-box disabled-comment-box'>
    <form className='message-box-card'>
      <button
        className='message-box-card-submit-button'
        onClick={event => handleLoginClick(event,props)}>
      Log In to Review
      </button>
    </form>
    </div>
  </Col>
)

const handleLoginClick = (event,{loginModal}) => {
  event.preventDefault()
  window.$(`#lsmodal`).modal('open')
  loginModal()
}

const mapDispatchToProps = dispatch => bindActionCreators({loginModal}, dispatch)
export default connect(null,mapDispatchToProps)(CommentBoxDisabled)
