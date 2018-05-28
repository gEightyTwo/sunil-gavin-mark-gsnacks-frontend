import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


//import components
import Navbar from './Navbar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import { request, AuthenticationService } from '../helpers'


//import CSS
import '../css/App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const App = (props) => {

  request('/auth/token')
    .then(response => {
      AuthenticationService.setAuthState(response.data)
      return request('/users')
    })
    .then(response => {
      console.log(AuthenticationService.getAuthState());
      const authState = AuthenticationService.getAuthState()
      const activeUser = response.data.data.find(el => el.id === authState.id)
      AuthenticationService.setAuthState(activeUser)
      console.log(`Active User: ${activeUser.first_name} ${activeUser.last_name}`)
    })

  return (

    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
