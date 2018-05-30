import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createReview, editReview } from '../actions'
import { withAuthentication } from '../helpers'
import Moment from 'react-moment';
import 'moment-timezone';


import ModalLogIn from '../Components/ModalLogIn'
import ModalCreateUser from '../Components/ModalCreateUser'

import {Col, Row, Modal, Button} from 'react-materialize'


class CommentBox extends Component {

  constructor(props){
    super(props)
    this.state={text: '', stars: 0, hover: false, hoverStars: 0}
  }


  static getDerivedStateFromProps(props,state){
    console.log(props,state)
    const {rating, text, id} = props.activeReview
    if (rating && rating !== state.stars) {
      return {...state, stars: rating, text: text}
    }
    return state
  }


  render(){
    const {first_name, picture} = this.props.authState
    const stars = this.state.stars
    const {rating, text, id} = this.props.activeReview


    return (
    <Col s={12} l={5}>
      <div className='message-box'>

      <form className='message-box-card' onSubmit={id ? event => this.handleEditReview(event,id) : this.handleSubmitReview}>
        <div className='message-box-card-header'>
          <div>
             <img alt=''className='message-box-card-user-image' src={picture}/>
             <div className='message-box-card-user-container'>
               <h3 className='message-box-card-username'>{first_name}</h3>
               <h4 className='message-box-card-date'><Moment format="MMM YYYY">{new Date}</Moment></h4>
             </div>
           </div>
           <div className='message-box-card-stars'>
             {[...Array(5).keys()].map(n=><i
               className={`fas fa-star ${this.setSelected(n+1)}`}
               onClick={()=>this.handleClick(n+1)}
               onMouseOver={()=>this.handleMouseOver(n+1)}
               onMouseOut={this.handleMouseOut}
               key = {n+1}
             />)}
           </div>
         </div>

        <textarea
          className='message-box-card-text-input'
          placeholder='What did you think about this snack?'
          name='text' text='asdasd'
          value={this.state.text}
          onChange={event=>this.setState({text:event.target.value})}
        />
        <button className='message-box-card-submit-button' type="submit">{id ? 'Edit Review': 'Submit Review'}</button>
      </form>


      </div>
    </Col>
  )}

  handleSubmitReview = event => {
    event.preventDefault()
    const body = {
      title: 'Title',
      text: event.target.text.value,
      rating: this.state.stars
    }

    this.props.createReview(this.props.snackId,body)
    event.target.text.value = ''
    this.setState({...this.state, stars: 0})

  }

  handleEditReview = (event,id) => {
    event.preventDefault()
    const body = {
      title: 'Title',
      text: event.target.text.value,
      rating: this.state.stars
    }
    console.log(this.props.snackId,id,body);
    this.props.editReview(this.props.snackId,id,body)
    event.target.text.value = ''
    this.setState({...this.state, stars: 0, text: ''})
    this.props.setActiveReview({})

  }


  setSelected = n => {
    if (this.state.hover) {
      return this.state.hoverStars >= n ? 'selected' : null
    }
    return this.state.stars >= n ? 'selected' : null
  }

  handleMouseOver = n => {
    this.setState({...this.state, hoverStars: n, hover: true})
  }

  handleMouseOut = () => {
    this.setState({...this.state, hoverStars: 0, hover: false})
  }

  handleClick = n => {
    this.setState({...this.state, stars: n})
    this.props.activeReview.rating = n
  }


}

const mapDispatchToProps = dispatch => bindActionCreators({createReview, editReview}, dispatch)
export default connect(null,mapDispatchToProps)(withAuthentication(CommentBox))
