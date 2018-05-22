import React from 'react'
import Banner from './Banner'
import SnackBasket from '../Containers/SnackBasket'
import SnackPage from '../Containers/SnackPage'
import {Col, Row, Modal, Button} from 'react-materialize'

const ReviewCard = ({reviewCardData:{text,title,user_id,rating,updated_at},userData}) => (
  <Col s={12} >

      {console.log(userData)}
     <div className='review-card'>
     <div className='review-card-header'>
       <div>
          <img alt=''className='review-card-user-image' src={userData.picture} />
          <div className='review-card-user-container'>
            <h3 className='review-card-username'>{userData.first_name} {userData.last_name}</h3>
            <h4 className='review-card-date'>May 2018 {updated_at}</h4>
          </div>
        </div>
        <div className='review-card-actions'>
          <i className="far fa-edit hidden"></i>
          <i className="far fa-trash-alt hidden"></i>
        </div>
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


export default ReviewCard
