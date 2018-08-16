import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Col, Row} from 'react-materialize'

import SnackBasketItem from './SnackBasketItem'

class SnackBasket  extends Component {
  constructor(props){
    super(props)
  }

  singleSnackReviewData(id){
    return this.props.snackReviews.filter(obj => obj.snack_id === id)
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
              <Col s={6} l={3} xl={3} key={col} className='hide-on-med-and-down'>
                {
                  this.props.snackList
                    .filter(el => el.id%4  === col)
                    .map(el => <Link to={`/${el.id}`} key={el.id}><SnackBasketItem itemData={el} reviewData={this.singleSnackReviewData(el.id)}/></Link>)
                }
              </Col>
            ))
          }
          {
            [...Array(4).keys()].map(col=>(
              <Col s={6} l={3} xl={3} key={col} className='hide-on-large-only'>
                {
                  this.props.snackList
                    .filter(el => el.id%2  === col)
                    .map(el => <Link to={`/${el.id}`} key={el.id}><SnackBasketItem itemData={el} reviewData={this.singleSnackReviewData(el.id)} /></Link>)
                }
              </Col>
            ))
          }
        </Row>
      </section>
    </div>
  )
}

const mapStateToProps = ({snackReviews, snackList}) => ({snackReviews, snackList})
export default connect(mapStateToProps)(SnackBasket)
