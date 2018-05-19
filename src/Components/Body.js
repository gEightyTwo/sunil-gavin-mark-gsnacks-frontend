import React from 'react'
import Banner from './Banner'
import SnackBasket from '../Containers/SnackBasket'
import SnackPage from '../Containers/SnackPage'
import {Col, Row, Modal, Button} from 'react-materialize'

const Body = () => (
  <div>
    <Banner />
    {false ? <SnackBasket/> : <SnackPage/>}
</div>
)


export default Body
