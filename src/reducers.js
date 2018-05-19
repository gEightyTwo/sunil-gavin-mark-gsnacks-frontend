import { combineReducers } from 'redux'
import {  } from './actions'

function (state = [], action){
  switch(action.type){
    case "CASEHERE": return //return here
    default: return state
  }
}

export default combineReducers({ list })
