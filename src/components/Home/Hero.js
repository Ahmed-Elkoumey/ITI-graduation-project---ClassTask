import Banner from './assest/banner7.jpg'
import logo from './assest/logooo.png'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

const Hero = (props) => {
    return ( 
        <div id={props.id} className=" hero" >
            {/* <div className="desc text-start mt-4  col-4">
                <h1>Making Education Accessible to Everyone</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptate!</p>
                
            </div> */}
  
    <Card className='cardhero' >
      <Card.Body >
        <Card.Title className='headcard'>Making Education Accessible to Everyone</Card.Title>
        <Card.Subtitle className="mb-2  subhead">Making Education Accessible to Everyone</Card.Subtitle>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptate!
        </Card.Text>
        <Button className='px-4 py-2 btn-hero'>Get Started Today</Button>
   
      </Card.Body>
    </Card>
   



            <div className=" text-center col-8 mb-5">
                {/* <img src={Banner} alt="placeholder" className=" img-fluid banner " /> */}
                <img src={logo} alt="placeholder" className=" img-fluid logopic " />
            </div>

        </div>
    );
}

export default Hero;