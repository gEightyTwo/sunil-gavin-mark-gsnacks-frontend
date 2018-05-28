import React from 'react'
import {Col, Row} from 'react-materialize'
import CommentBox from './CommentBox'
import CommentBoxDisabled from './CommentBoxDisabled'

import ReviewList from './ReviewList'
import {connect} from 'react-redux'
import { withAuthentication } from '../helpers'


const SnackPage = (props) => {
  const snack = props.snackList.find(el => el.id == props.match.params.snackId) || {}

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
        { props.authState  ? <CommentBox snackId={snack.id}/> : <CommentBoxDisabled />}
        <ReviewList snackId={props.match.params.snackId}/>
      </Row>
    </section>
  </div>
)}

const mapStateToProps = ({snackList}) => ({snackList})
export default connect(mapStateToProps)(withAuthentication(SnackPage))
