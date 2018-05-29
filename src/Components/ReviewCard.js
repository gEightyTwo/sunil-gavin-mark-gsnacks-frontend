import React from 'react'
import Moment from 'react-moment';
import 'moment-timezone';

import Banner from './Banner'
import SnackBasket from '../Containers/SnackBasket'
import SnackPage from '../Containers/SnackPage'

import { withAuthentication } from '../helpers'
import {deleteReview, modifyReview} from '../actions'

import {Col, Row, Modal, Button} from 'react-materialize'

const ReviewCard = ({reviewCardData:{id,snackId,text,title,user_id,rating,updated_at},userData={}, authState}) => (
  <Col s={12} >

     <div className='review-card'>
     <div className='review-card-header'>
       <div>
          <img alt=''className='review-card-user-image' src={userData.picture} />
          <div className='review-card-user-container'>
            <h3 className='review-card-username'>{userData.first_name} {userData.last_name}</h3>
            <h4 className='review-card-date'> <Moment fromNow>{updated_at}</Moment></h4>
          </div>
        </div>
        {
          authState && authState.id=== user_id
          ?
            <div className='review-card-actions'>
              <i className="far fa-edit" onClick={handleEdit}></i>
              <i className="far fa-trash-alt" onClick={() => handleDelete(this.id, this.snackId)}></i>
            </div>
          : null
        }

      </div>
       <div className ='review-card-stars'>
         {[...Array(rating).keys()].map((el)=><i className="fas fa-star" key={el}/>)}
       </div>
       <p className ='review-card-text'>
        {text}
       </p>
     </div>
  </Col>
)


const handleDelete = (id, snackId) => {
  deleteReview(id, snackId)
}


const handleEdit = event => {
  event.preventDefault()
  console.log('edit!');
}

export default withAuthentication(ReviewCard)
