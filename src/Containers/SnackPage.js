import React from 'react'
import {Col, Row, Modal, Button} from 'react-materialize'



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
        <Col s={12} l={5}>
          <div className='message-box'>

          <form className='message-box-card'>
            <div className='message-box-card-header'>
              <div>
                 <img alt=''className='message-box-card-user-image' src={'./assets/tengo.jpg'}/>
                 <div className='message-box-card-user-container'>
                   <h3 className='message-box-card-username'>Tengo</h3>
                   <h4 className='message-box-card-date'>May 2018</h4>
                 </div>
               </div>
               <div className='message-box-card-stars'>
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
                 <i className="fas fa-star" />
               </div>
             </div>

            <textarea className='message-box-card-text-input' placeholder='What did you think about this snack?'></textarea>

            <button className='message-box-card-submit-button'>Submit Review</button>
          </form>


          </div>
        </Col>
        <Col s={12} l={7}>

           <div className='item-page-reviews-container'>
             <p className = 'item-page-card-review-count'>301 Reviews</p>
             <div className ='item-page-card-stars'>
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star-half" />
             </div>
           </div>
        </Col>

        <Col s={12} l={7}>

           <div className='review-card'>
           <div className='review-card-header'>
             <div>
                <img alt=''className='review-card-user-image' src={'./assets/dandog.jpg'} />
                <div className='review-card-user-container'>
                  <h3 className='review-card-username'>Dandog</h3>
                  <h4 className='review-card-date'>May 2018</h4>
                </div>
              </div>
              <div className='review-card-actions'>
                <i className="far fa-edit hidden"></i>
                <i className="far fa-trash-alt hidden"></i>
              </div>
            </div>
             <div className ='review-card-stars'>
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
             </div>
             <p className ='review-card-text'>
             Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
             </p>
           </div>
        </Col>

        <Col s={12} l={7}>

           <div className='review-card'>
           <div className='review-card-header'>
             <div>
                <img alt=''className='review-card-user-image'src={'./assets/tengo.jpg'}/>
                <div className='review-card-user-container'>
                  <h3 className='review-card-username'>Tengo</h3>
                  <h4 className='review-card-date'>May 2018</h4>
                </div>
              </div>
              <div className='review-card-actions'>
                <i className="far fa-edit"></i>
                <i className="far fa-trash-alt"></i>
              </div>
            </div>
             <div className ='review-card-stars'>
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
               <i className="fas fa-star" />
             </div>
             <p className ='review-card-text'>
             Meh.
             <br/>
             <br/>

              quinoa polaroid pork belly biodiesel snackwave. DIY waistcoat brunch farm-to-table paleo, jianbing air plant kombucha lomo whatever jean shorts roof party prism pitchfork.
             <br/>
             <br/>
             Kogi pop-up kinfolk mustache poutine fingerstache skateboard taiyaki church-key kitsch franzen cray gochujang. 3 wolf moon lomo wolf williamsburg. IPhone vexillologist cred master cleanse paleo vaporware, pop-up cliche edison bulb neutra. Chambray tumeric everyday carry tofu gastropub. Mixtape jean shorts echo park disrupt trust fund tote bag.
             </p>
           </div>
        </Col>

        <Col s={12} l={7}>
         <div className='review-card'>
           <div className='review-card-header'>
             <div>
                <img alt=''className='review-card-user-image' src={'http://placecage.com/48/48'}/>
                <div className='review-card-user-container'>
                  <h3 className='review-card-username'>Nick</h3>
                  <h4 className='review-card-date'>May 2018</h4>
                </div>
              </div>
              <div className='review-card-actions'>
                <i className="far fa-edit hidden"></i>
                <i className="far fa-trash-alt hidden"></i>
              </div>
            </div>
           <div className ='review-card-stars'>
             <i className="fas fa-star" />

           </div>
           <p className ='review-card-text'>
           You'll be seeing a lot of changes around here. Papa's got a brand new bag.
           </p>
         </div>
        </Col>



      </Row>
    </section>

  </div>


)


export default SnackPage
