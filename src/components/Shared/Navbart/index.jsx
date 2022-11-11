import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./navbar.css";
import UserAvatar from "../../../assets/girl.jpg";
import { FaBell } from "@react-icons/all-files/fa/FaBell";
import teacher from "./assests/teacher1.jpg";

function Navbart({ title, pic ,userId}) {


  return (
    <Navbar
      id="navbart"
      className="navbart d-flex justify-content-between"
      expand="lg"
      collapseOnSelect
    >
      <Container fluid>
        <Navbar.Brand href="#" className=" logo_AT">
         <Link to={`/`}>
          ClassTask
         </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex search_AT">
            <Form.Control
              type="search"
              placeholder="Search here..."
              className="me-2"
              aria-label="Search"
            />
            <Button className="button_AT">Search </Button>
          </Form>
          <div>
            <Navbar.Brand href="#" className="notification_AT ">
              <FaBell />
            </Navbar.Brand>
          </div>
          {/* accounte */}

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <div className=' d-flex  acc_AT' >
     
                  <img className=' rounded-circle img-fluid teacher' src={teacher} alt='user'/>
            <NavDropdown  title={title} id="navbarScrollingDropdown" className="accountbar_AT">
              <NavDropdown.Item href="#action3" className='dropdown'>Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='dropdown'>
                Help
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='dropdown'>
              Log out
              </NavDropdown.Item>
            </NavDropdown></div> */}
            <div className=" d-flex  acc_AT">
              <img
                className=" rounded-circle img-fluid teacher"
                src={pic}
                alt="user"
              />
              <NavDropdown
                title={title}
                id="collasible-nav-dropdown"
                className="mh-100 accountbar_AT>
            </Nav>"
              >
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Classes</NavDropdown.Item>
                <NavDropdown.Item href="#">Tasks</NavDropdown.Item>

                <NavDropdown.Divider />
                <Link to="/">LogOut</Link>
              </NavDropdown>{" "}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbart;
