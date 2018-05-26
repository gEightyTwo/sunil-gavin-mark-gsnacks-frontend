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
    if(i>=1) return [<i className="fas fa-star" />, ...this.createStars(i-1)]
    else if(i<1 && i>1) return [<i className="fas fa-star-half" />]
    else return []

    //if(i ==0 ) new Array(5).map of empty stars? if so remove awaiting review ternary
  }
  render = () => (

    <Col s={12} className='item-card'>
      <img alt=''src={this.itemData.img} className='responsive-img card-image'/>
      <h1 className='card-title'>{this.itemData.name}</h1>
      <h2 className='card-short-description'>{this.itemData.description}</h2>
      <div className ='card-stars'>
      {this.props.reviewData.length>0?this.createStars(_.mean(this.props.reviewData.map(obj => obj.rating))):'Awaiting Review'}
      </div>
      <p className = 'card-review-count'>{`${this.reviewData.length} Reviews`}</p>
    </Col>

  )
}


export default SnackBasketItem
