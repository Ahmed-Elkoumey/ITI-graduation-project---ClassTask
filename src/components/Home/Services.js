import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from '../../assets/sliderImg1.jpg'
import sliderImg2 from '../../assets/sliderImg2.jpg'
import sliderImg3 from '../../assets/silderImg3.jpg'

const Services = (props) => {
    return ( 
        <div id={props.id} className="services">
            <div className='animation d-flex justify-content-between '>
                <div className='data'>
                    <p>Total students </p>
                <p>250</p>
                </div>

             <div className='animationdiv'>
            <div class="wrapper1 ">
              <div class="border-circle" id="one"></div>
              <div class="border-circle" id="two"></div>
              <div class="background-circle">
                <div class="triangle-light"></div>
                <div class="body"></div>
                <div className=" ms-5">
                  <span class="shirt-text ms-5 ">Class</span>

                  <span class="shirt-text">Task</span>
                </div>

                <div class="triangle-dark"></div>
              </div>
              <div class="head">
                <div class="ear" id="left"></div>
                <div class="ear" id="right"></div>
                <div class="hair-main">
                  <div class="sideburn" id="left"></div>
                  <div class="sideburn" id="right"></div>
                  <div class="hair-top"></div>
                </div>
                <div class="face">
                  <div class="hair-bottom"></div>
                  <div class="nose"></div>
                  <div class="eye-shadow" id="left">
                    <div class="eyebrow"></div>
                    <div class="eye"></div>
                  </div>
                  <div class="eye-shadow" id="right">
                    <div class="eyebrow"></div>
                    <div class="eye"></div>
                  </div>
                  <div class="mouth"></div>
                  <div class="shadow-wrapper">
                    <div class="shadow"></div>
                  </div>
                </div>
              </div>
              <span class="music-note" id="one">
                &#9835;
              </span>
              <span class="music-note" id="two">
                &#9834;
              </span>
            </div>
            </div> 

             <div className='data'>
                <p>Total classes </p>
                <p>20</p> 

            </div>
            </div>



            <Carousel variant="dark" className='slidder'>
            <Carousel.Item className=''>
                <div className="slider-img-wrapper slider_img ">
                    <img 
                    className="d-block img-fluid"
                    src={sliderImg1}
                    alt="First slide"
                    />
                </div>
                <Carousel.Caption className='text-slidder'>
                <h3>First slide label</h3>
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className=''>
                <div className="slider-img-wrapper slider_img ">
                    <img 
                    className="d-block img-fluid"
                    src={sliderImg2}
                    alt="First slide"
                    />
                </div>
                <Carousel.Caption className='text-slidder'>
                <h3>First slide label</h3>
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className=''>
                <div className="slider-img-wrapper slider_img ">
                    <img 
                    className="d-block img-fluid"
                    src={sliderImg3}
                    alt="First slide"
                    />
                </div>
                <Carousel.Caption className='text-slidder'>
                <h3>First slide label</h3>
                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
     );
}
 
export default Services;