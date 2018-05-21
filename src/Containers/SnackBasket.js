import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import {Col, Row, Modal, Button} from 'react-materialize'
import SnackBasketItem from './SnackBasketItem'
import {getAllSnacks} from '../actions'



class SnackBasket  extends Component {

  componentDidMount(){
    this.props.getAllSnacks()
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
            [...Array(12).keys()].map(el => <SnackBasketItem />)
          }
        </Row>
      </section>
    </div>
  )

}

const mapDispatchToProps = dispatch => bindActionCreators({getAllSnacks}, dispatch)
const mapStateToProps = ({snackList}) => ({snackList})
export default connect(mapStateToProps, mapDispatchToProps)(SnackBasket)
