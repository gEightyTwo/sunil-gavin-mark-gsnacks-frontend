import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


//import components
import Navbar from './Navbar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'

//import CSS
import '../css/App.css';
import {Col, Row, Modal, Button} from 'react-materialize'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div>
      <Navbar />
      <Body />
      <Footer />
    </div>

    </BrowserRouter>

    </div>
  )
}

export default App;
