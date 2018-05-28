import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createReview } from '../actions'
import { withAuthentication } from '../helpers'
import Moment from 'react-moment';
import 'moment-timezone';


import ModalLogIn from '../Components/ModalLogIn'
import ModalCreateUser from '../Components/ModalCreateUser'

import {Col, Row, Modal, Button} from 'react-materialize'


class CommentBox extends Component {

  constructor(props){
    super(props)
    this.state={stars: 0}
  }

  render(){
    const {first_name, picture} = this.props.authState
    const stars = this.state.stars
    return (
    <Col s={12} l={5}>
      <div className='message-box'>

      <form className='message-box-card' onSubmit={this.handleSubmitReview}>
        <div className='message-box-card-header'>
          <div>
             <img alt=''className='message-box-card-user-image' src={picture}/>
             <div className='message-box-card-user-container'>
               <h3 className='message-box-card-username'>{first_name}</h3>
               <h4 className='message-box-card-date'><Moment format="MMM YYYY">{new Date}</Moment></h4>
             </div>
           </div>
           <div className='message-box-card-stars'>
             <i className={`fas fa-star ${stars >= 1 ? 'selected' : null }`} onClick={event=>this.setState({...this.state, stars: 1})}/>
             <i className={`fas fa-star ${stars >= 2 ? 'selected' : null }`} onClick={event=>this.setState({...this.state, stars: 2})}/>
             <i className={`fas fa-star ${stars >= 3 ? 'selected' : null }`} onClick={event=>this.setState({...this.state, stars: 3})}/>
             <i className={`fas fa-star ${stars >= 4 ? 'selected' : null }`} onClick={event=>this.setState({...this.state, stars: 4})}/>
             <i className={`fas fa-star ${stars >= 5 ? 'selected' : null }`} onClick={event=>this.setState({...this.state, stars: 5})}/>
           </div>
         </div>

        <textarea className='message-box-card-text-input' placeholder='What did you think about this snack?' name='text'></textarea>

        <button className='message-box-card-submit-button' type="submit">Submit Review</button>
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

}

const mapDispatchToProps = dispatch => bindActionCreators({createReview}, dispatch)
export default connect(null,mapDispatchToProps)(withAuthentication(CommentBox))
