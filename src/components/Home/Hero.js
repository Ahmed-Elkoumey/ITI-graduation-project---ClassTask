
import './homeresponsive.css'
import logo from './assest/logooo.png'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

const Hero = (props) => {
    return ( 
        <div id={props.id} className=" hero container mb-5 d-flex flex-wrap" >
            <div className='row'>
            
           
  
    <Card className='cardhero d-flex  justify-content-between ' >
      <Card.Body className='' >
        <Card.Title className='headcard'>Making Education Accessible to Everyone</Card.Title>
        <Card.Subtitle className="mb-2  subhead">Making Education Accessible to Everyone</Card.Subtitle>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptate!
        </Card.Text>
        <Button className='px-4 py-2 btn-hero'>Get Started Today</Button>
   
      </Card.Body>
    </Card>
   



            {/* <div className=" text-center "> */}
              
                <img src={logo} alt="placeholder" className=" img-fluid logopic col-8 mb-5" />
            {/* </div> */}
            </div>
        </div>
 
    );
}

export default Hero;