import { combineReducers } from 'redux'

import { GET_ALL_SNACKS, GET_ALL_REVIEWS, GET_USER, GET_AUTH, GET_ALL_USERS, LOGIN_MODAL, SIGNUP_MODAL } from './actions'

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

const allUsers = (state = INITIAL_VALUE, action) => {
  switch(action.type){
    case GET_ALL_USERS: return action.payload
    default: return state
  }
}

const modalStatus = (state = null, action) => {
  console.log('updating');
  switch(action.type){
    case LOGIN_MODAL: return 'login'
    case SIGNUP_MODAL: return 'signup'
    default: return state
  }

}

export default combineReducers({ snackList, snackReviews, user, auth, allUsers,modalStatus })
