import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Col, Row, Modal, Button} from 'react-materialize'
import SnackBasketItem from './SnackBasketItem'

import {Link} from 'react-router-dom'

class SnackBasket  extends Component {

  constructor(props){
    super(props)
  }

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
            this.props.snackList.map(el => <Link to={`/${el.id}`} params={{ testvalue: "hello" }}><SnackBasketItem itemData={el} /></Link>)
          }
        </Row>
      </section>
    </div>
  )
}

const mapStateToProps = ({snackList}) => ({snackList})
export default connect(mapStateToProps)(SnackBasket)
