import React from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'
import CommentBox from './CommentBox'
import ReviewList from './ReviewList'



const SnackPage = () => (

  <div className='main-container-item'>

    <section className='food-category'>

      <Row>

        <Col s={12} l={7}  className='item-page-item-card'>
          <h1 className='item-page-card-title'>Delicious Snack Title</h1>
          <h2 className='item-page-card-short-description'>Delicious Snack Short Descripion</h2>


          <p className='item-page-card-full-description'>

          Bacon ipsum dolor amet biltong corned beef tail pork loin, beef ribs kielbasa t-bone porchetta bresaola picanha andouille fatback pig alcatra. Ribeye ground round corned beef filet mignon, fatback andouille frankfurter tri-tip alcatra. Bacon tongue boudin hamburger turkey. Flank doner corned beef salami.
          <br/><br/>
          Filet mignon brisket frankfurter pork biltong drumstick tenderloin boudin picanha alcatra. Ball tip shoulder ham swine venison pork belly ribeye leberkas pork chop. Strip steak cupim biltong rump spare ribs tongue ham hock burgdoggen shoulder. Kevin shoulder cow landjaeger pancetta capicola.
           </p>


        </Col>
        
        { true  ? <CommentBox /> : <CommentBox />}

        <ReviewList/>


      </Row>
    </section>

  </div>


)


export default SnackPage
