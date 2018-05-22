import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import ReviewCard from '../Components/ReviewCard'
import {getAllUsers} from '../actions'

import {Col, Row, Modal, Button} from 'react-materialize'

class ReviewList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getAllUsers()
  }

  createStars(i){
    for(i; i>0; i--){
       if(i>1) <i className="fas fa-star" />
       if(0.2>i>1) <i className="fas fa-star-half" />
      }
   }

  render = () => (
    <Col s={12} l={7}>
      <Col s={12} >
         <div className='item-page-reviews-container'>
           <p className = 'item-page-card-review-count'>{this.props.snackReviews.filter(el => el.snack_id == this.props.snackId).length} Reviews</p>
           <div className ='item-page-card-stars'>
           { this.createStars(_.mean(this.props.snackReviews.filter(el => el.snack_id == this.props.snackId).map(obj => obj.rating))) }
           </div>
         </div>
      </Col>
      {this.props.snackReviews.filter(el => el.snack_id == this.props.snackId).map(el =>
        <ReviewCard
          reviewCardData={el}
          userData={this.props.allUsers.find(user => user.id == el.user_id)}
          key={el.id}/>
      )}
    </Col>
  )
}

const mapStateToProps = ({snackReviews, allUsers}) => ({snackReviews, allUsers})
const mapDispatchToProps = dispatch => bindActionCreators({getAllUsers}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList)
