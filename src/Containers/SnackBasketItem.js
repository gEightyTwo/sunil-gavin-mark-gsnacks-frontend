import React, {Component} from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'



class SnackBasketItem  extends Component {

  render = () => (

          <Col s={6} l={3} xl={3} className='item-card'>
            <img alt=''src={'http://placecage.com/600/400'} className='responsive-img card-image'/>
            <h1 className='card-title'>Delicious Snack Title</h1>
            <h2 className='card-short-description'>Delicious Snack Short Descripion</h2>
            <div className ='card-stars'>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half" />
            </div><p className = 'card-review-count'>301</p>
          </Col>

  )
}


export default SnackBasketItem
