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
            [...Array(4).keys()].map(col=>(
            <Col s={6} l={3} xl={3} className='hide-on-med-and-down'>
              {
                this.props.snackList
                  .filter(el => el.id%4  === col)
                  .map(el => <Link to={`/${el.id}`}><SnackBasketItem itemData={el} /></Link>)
              }
            </Col>
          ))
        }
        {
          [...Array(4).keys()].map(col=>(
          <Col s={6} l={3} xl={3} className='hide-on-large-only'>
            {
              this.props.snackList
                .filter(el => el.id%2  === col)
                .map(el => <Link to={`/${el.id}`}><SnackBasketItem itemData={el} /></Link>)
            }
          </Col>
        ))
      }
        </Row>
      </section>
    </div>
  )


}

const mapStateToProps = ({snackList}) => ({snackList})
export default connect(mapStateToProps)(SnackBasket)
