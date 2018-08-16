import axios from 'axios'
import { request } from './helpers'

export const GET_ALL_SNACKS = 'GET_ALL_SNACKS'
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS'
export const GET_USER = 'GET_USER'
export const GET_AUTH = 'GET_AUTH'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const LOGIN_MODAL = 'LOGIN_MODAL'
export const SIGNUP_MODAL = 'SIGNUP_MODAL'

const API = `${process.env.REACT_APP_BACKEND}`


export const getAllSnacks = () => (
  dispatch => {
    axios.get(`${API}/api/snacks`)
      .then((response) => {
        dispatch({
          type: GET_ALL_SNACKS,
          payload: response.data.data
        })
      })
  }
)

export const getAllReviews = () => (
  dispatch => {
    axios.get(`${API}/api/reviews`)
      .then((response) => {
        dispatch({
          type: GET_ALL_REVIEWS,
          payload: response.data.data
        })
      })
  }
)

export const createReview = (snackId, body) => (
  dispatch => {
    request(`/api/snacks/${snackId}/reviews`, 'post', body)
      .then(response => {
        dispatch(getAllReviews())
      })
  }
)

export const editReview = (snackId, reviewId, body) => {
  return (
    dispatch => {
      request(`/api/snacks/${snackId}/reviews/${reviewId}`, 'put', body)
        .then(response => {
          dispatch(getAllReviews())
        })
    }
  )
}

export const deleteReview = (snackId, reviewId) => (
  dispatch => {
    request(`/api/snacks/${snackId}/reviews/${reviewId}`, 'delete')
      .then(response => {
        dispatch(getAllReviews())
      })
  }
)

export const getUser = () => (
  dispatch => {
    axios.get(`${API}/users/`)
      .then((response) => {
        dispatch({
          type: GET_USER,
          payload: response.data.data
        })
      })
  }
)


export const getAllUsers = () => (
  dispatch => {
    axios.get(`${API}/users/`)
      .then((response) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: response.data.data
        })
      })
  }
)

export const getAuth = () => (
  dispatch => {
    axios.get(`${API}/auth/`)
      .then((response) => {
        dispatch({
          type: GET_AUTH,
          payload: response.data.data
        })
      })
  }
)

export const loginModal = () => {
  return (
    dispatch => {
      dispatch({
        type: LOGIN_MODAL
      })
    }
  )
}

export const signupModal = () => (
  dispatch => {
    dispatch({
      type: SIGNUP_MODAL
    })
  }
)

export const signup = (body) => (
  dispatch => {
    axios.post(`${API}/users`, body)
      .then((response) => {
        dispatch({
          type: LOGIN_MODAL,
        })
      })
      .catch(err => console.log(err))
  }
)
