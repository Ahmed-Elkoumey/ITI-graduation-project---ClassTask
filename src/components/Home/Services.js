import Carousel from 'react-bootstrap/Carousel';
import sliderImg1 from '../../assets/sliderImg1.jpg'
import sliderImg2 from '../../assets/sliderImg2.jpg'
import sliderImg3 from '../../assets/silderImg3.jpg'

const Services = (props) => {
    return ( 
        <div id={props.id} className="services">
            <Carousel variant="dark">
            <Carousel.Item className=''>
                <div className="slider-img-wrapper">
                    <img 
                    className="d-block w-100 img-fluid"
                    src={sliderImg1}
                    alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className=''>
                <div className="slider-img-wrapper">
                    <img 
                    className="d-block w-100 img-fluid"
                    src={sliderImg2}
                    alt="Second slide"
                    />
                </div>


                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className=''>
                <div className="slider-img-wrapper">
                    <img 
                    className="d-block w-100 img-fluid"
                    src={sliderImg3}
                    alt="Third slide"
                    />
                </div>

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
     );
}
 
export default Services;