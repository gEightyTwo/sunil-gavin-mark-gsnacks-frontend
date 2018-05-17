import React from 'react';

//import components
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'

//import CSS
import './App.css';
import {Col, Row, Modal, Button} from 'react-materialize'
import '../node_modules/font-awesome/css/font-awesome.min.css';

const App = (props) => {
  return (
    <div>
      <Navbar /> //Contains: Login Modal, Createuser Modal
      <Body />   //Contains: SnackBasket, SnackDescription
      <Footer /> //Contains: Footer
    </div>
  )
}

export default App;
