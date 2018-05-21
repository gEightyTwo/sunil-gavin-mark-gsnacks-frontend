import axios from 'axios'

export const GET_ALL_SNACKS = 'GET_ALL_SNACKS'
export const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS'
export const GET_USER = 'GET_USER'
export const GET_AUTH = 'GET_AUTH'

const API = 'http://localhost:5000'


export const getAllSnacks = () => (
  dispatch => {
    axios.get(`${API}/api/snacks`)
    .then((response) => {
      dispatch({
        type: GET_ALL_SNACKS,
        payload: response.data
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
        payload: response.data
      })
    })
  }
)

export const createReview = (body) => (
  dispatch => {
    axios.post(`${API}/api/reviews`, body)
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
        payload: response.data
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
        payload: response.data
      })
    })
  }
)
