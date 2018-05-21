import React from 'react'
import { connect } from 'react-redux'

import ReviewCard from '../Components/ReviewCard'

import {Col, Row, Modal, Button} from 'react-materialize'



const ReviewList = (props) => (
  <Col s={12} l={7}>
          <Col s={12} >

             <div className='item-page-reviews-container'>
               <p className = 'item-page-card-review-count'>{props.snackReviews.filter(el => el.snack_id == props.snackId).length} Reviews</p>
               <div className ='item-page-card-stars'>
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star-half" />
               </div>
             </div>
          </Col>

          {props.snackReviews.filter(el => el.snack_id == props.snackId).map(el => <ReviewCard reviewCardData={el} key={el.id}/>)}


        </Col>


)


const mapStateToProps = ({snackReviews}) => ({snackReviews})
export default connect(mapStateToProps)(ReviewList)
