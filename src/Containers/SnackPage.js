import React, {Component} from 'react'
import {Col, Row} from 'react-materialize'
import CommentBox from './CommentBox'
import CommentBoxDisabled from './CommentBoxDisabled'

import ReviewList from './ReviewList'
import {connect} from 'react-redux'
import { withAuthentication } from '../helpers'


class SnackPage extends Component {

  constructor(props){
    super(props)
    this.state = {activeReview: {}}
  }


  setActiveReview = review => {
    this.setState({...this.state, activeReview: review})
  }


 render(){
  const snack = this.props.snackList.find(el => el.id == this.props.match.params.snackId) || {}
  return (
    <div className='main-container-item'>
      <section className='food-category'>
        <Row>
          <Col s={12} l={7}  className='item-page-item-card'>
            <h1 className='item-page-card-title'>{snack.name}</h1>
            <h2 className='item-page-card-short-description'>Delicious Snack Short Descripion</h2>
            <p className='item-page-card-full-description'>
              {snack.description}
            </p>
          </Col>
          { this.props.authState
            ? <CommentBox snackId={snack.id} activeReview={this.state.activeReview} setActiveReview = {this.setActiveReview} ref={(el) => { this.commentBox = el }} />
            : <CommentBoxDisabled />
          }
          <ReviewList snackId={this.props.match.params.snackId} commentBox = {this.commentBox} setActiveReview = {this.setActiveReview}/>
        </Row>
      </section>
    </div>
  )}
}

const mapStateToProps = ({snackList}) => ({snackList})
export default connect(mapStateToProps)(withAuthentication(SnackPage))
