import React, { Component } from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'
import _ from 'lodash'

class SnackBasketItem extends Component {
  constructor(props){
    super(props)
    this.itemData = props.itemData,
    this.reviewData = props.reviewData
  }

  createStars(i){
    if(i>.75) return [<i className="fas fa-star" />, ...this.createStars(i-1)]
    else if(i>.25) return [<i className="fas fa-star-half" />]
    else return []
  }
  render = () => (

    <Col s={12} className='item-card'>
      <img alt=''src={this.itemData.img} className='responsive-img card-image'/>
      <h1 className='card-title'>{this.itemData.name}</h1>
      <h2 className='card-short-description'>{this.itemData.description}</h2>
      <div className ='card-stars'>
      {this.props.reviewData.length>0?this.createStars(_.mean(this.props.reviewData.map(obj => obj.rating))):''}
      </div>
      <p className = 'card-review-count'>{`${this.props.reviewData.length} Review${this.props.reviewData.length-1?'s':''}`}</p>
    </Col>

  )
}


export default SnackBasketItem
