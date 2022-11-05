import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
 import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import { FaBell } from "@react-icons/all-files/fa/FaBell";
import teacher from "./assests/teacher1.jpg";


function Navbart() {
  return (
    <Navbar className='navbar d-flex justify-content-between' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='logo' >ClassTask</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
    
          <Form className="d-flex search" >
            <Form.Control
              type="search"
              placeholder="Search here..."
              className="me-2"
              aria-label="Search"
            />
            <Button className="button">Search </Button>
          </Form>
          <div><Navbar.Brand href="#" className='notification ' ><FaBell/></Navbar.Brand></div>
{/* accounte */}

             <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        <div className=' d-flex  acc' >
     
                  <img className=' rounded-circle img-fluid teacher' src={teacher} alt='user'/>
            <NavDropdown  title="Ahmed Elzoghaby" id="navbarScrollingDropdown" className="accountbar">
              <NavDropdown.Item href="#action3" className='dropdown'>Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='dropdown'>
                Help
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='dropdown'>
              Log out
              </NavDropdown.Item>
            </NavDropdown></div>
           
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navbart;