import React, {Component} from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'
import SnackBasketItem from './SnackBasketItem'



class SnackBasket  extends Component {

  render = () => (
    <div className='main-container'>
      <section className='food-category'>
        <Row>
          <Col s={12}>
            <h1 className='section-title'>
              Food around the world
            </h1>
          </Col>
        </Row>
        <Row className='card-container'>
          {
            [...Array(12).keys()].map(el => <SnackBasketItem />)
          }
        </Row>
      </section>
    </div>
  )

}


export default SnackBasket
