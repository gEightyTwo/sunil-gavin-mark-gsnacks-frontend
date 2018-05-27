import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { handleSubmit } from '../actions'
import { withAuthentication } from '../helpers'


import ModalLogIn from '../Components/ModalLogIn'
import ModalCreateUser from '../Components/ModalCreateUser'

import {Col, Row, Modal, Button} from 'react-materialize'


const CommentBox = (props) => {
  console.log('!!!!!',props.authState)
  const {first_name, picture} = props.authState
  return (
  <Col s={12} l={5}>
    <div className='message-box'>

    <form className='message-box-card'>
      <div className='message-box-card-header'>
        <div>
           <img alt=''className='message-box-card-user-image' src={picture}/>
           <div className='message-box-card-user-container'>
             <h3 className='message-box-card-username'>{first_name}</h3>
             <h4 className='message-box-card-date'>May 2018</h4>
           </div>
         </div>
         <div className='message-box-card-stars'>
           <i className="fas fa-star" />
           <i className="fas fa-star" />
           <i className="fas fa-star" />
           <i className="fas fa-star" />
           <i className="fas fa-star" />
         </div>
       </div>

      <textarea className='message-box-card-text-input' placeholder='What did you think about this snack?'></textarea>

      <button className='message-box-card-submit-button'>Submit Review</button>
    </form>


    </div>
  </Col>
)}


export default withAuthentication(CommentBox)
