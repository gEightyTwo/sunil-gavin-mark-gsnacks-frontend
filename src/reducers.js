import { combineReducers } from 'redux'

import { GET_ALL_SNACKS, GET_ALL_REVIEWS, GET_USER, GET_AUTH } from './actions'

const INITIAL_VALUE = []

const snackList = (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case GET_ALL_SNACKS: return action.payload
    default: return state
  }
}

const snackReviews = (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case GET_ALL_REVIEWS: return action.payload
    default: return state
  }
}

const user = (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case GET_USER: return action.payload
    default: return state
  }
}

const auth = (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case GET_AUTH: return action.payload
    default: return state
  }
}

export default combineReducers({ snackList, snackReviews, user, auth })
