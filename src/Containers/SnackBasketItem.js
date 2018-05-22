import React from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'



const SnackBasketItem = ({itemData: {name, description, img}}) => (

  <Col s={12} className='item-card'>
    {console.log(name,description,img)}
    <img alt=''src={img} className='responsive-img card-image'/>
    <h1 className='card-title'>{name}</h1>
    <h2 className='card-short-description'>{description}</h2>
    <div className ='card-stars'>
    <i className="fas fa-star" />
    <i className="fas fa-star" />
    <i className="fas fa-star" />
    <i className="fas fa-star-half" />
    </div><p className = 'card-review-count'>301</p>
  </Col>

)



export default SnackBasketItem
