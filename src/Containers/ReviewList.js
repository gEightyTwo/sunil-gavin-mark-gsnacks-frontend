import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { handleSubmit } from '../actions'

import ModalLogIn from '../Components/ModalLogIn'
import ModalCreateUser from '../Components/ModalCreateUser'
import ReviewCard from '../Components/ReviewCard'

import {Col, Row, Modal, Button} from 'react-materialize'



const ReviewList = (props) => (
  <Col s={12} l={7}>
          <Col s={12} >

             <div className='item-page-reviews-container'>
               <p className = 'item-page-card-review-count'>301 Reviews</p>
               <div className ='item-page-card-stars'>
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star-half" />
               </div>
             </div>
          </Col>

          <ReviewCard />
          <ReviewCard />
          <ReviewCard />

        </Col>


)

// const mapDispatchToProps = (dispatch) => bindActionCreators({ }, dispatch)

// export default connect(null, mapDispatchToProps)(Navbar)
export default ReviewList
