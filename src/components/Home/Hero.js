import Banner from '../../assets/Students-watching .jpg'
import { Button } from 'react-bootstrap';

const Hero = (props) => {
    return ( 
        <div id={props.id} className="hero pt-5 pb-5 container-fluid row align-items-center vw-100">
            <div className="desc text-start mt-4 text-white col-4">
                <h1>Making Education Accessible to Everyone</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptate!</p>
                <Button className='px-4 py-2'>Get Started Today</Button>
            </div>

            <div className="banner text-center col-8">
                <img src={Banner} alt="placeholder" className=" img-fluid" />
            </div>

        </div>
    );
}

export default Hero;