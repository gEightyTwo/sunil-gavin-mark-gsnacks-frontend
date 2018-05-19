import React from 'react'
import Banner from './Banner'
import SnackBasket from '../Containers/SnackBasket'
import SnackPage from '../Containers/SnackPage'
import {Col, Row, Modal, Button} from 'react-materialize'

const ReviewCard = () => (
  <Col s={12} >

     <div className='review-card'>
     <div className='review-card-header'>
       <div>
          <img alt=''className='review-card-user-image' src={'./assets/dandog.jpg'} />
          <div className='review-card-user-container'>
            <h3 className='review-card-username'>Dandog</h3>
            <h4 className='review-card-date'>May 2018</h4>
          </div>
        </div>
        <div className='review-card-actions'>
          <i className="far fa-edit hidden"></i>
          <i className="far fa-trash-alt hidden"></i>
        </div>
      </div>
       <div className ='review-card-stars'>
         <i className="fas fa-star" />
         <i className="fas fa-star" />
         <i className="fas fa-star" />
         <i className="fas fa-star" />
         <i className="fas fa-star" />
       </div>
       <p className ='review-card-text'>
       Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
       </p>
     </div>
  </Col>
)


export default ReviewCard
