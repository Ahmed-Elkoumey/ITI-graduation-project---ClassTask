import { BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import UserAvatar from "../../../assets/girl.jpg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form } from "react-bootstrap";

import "./style.css";
import { Link } from "react-router-dom";
const StudentNav = ({ title, pic }) => {
  let userInfo = (
    <div className="d-flex rounded-pill user-info pe-2">
      <img
        src={pic}
        alt="user-avatar"
        className="rounded-circle img-fluid me-2"
      />
      <div className="d-flex flex-column">
        <h3 className="m-0 user-name">User Name</h3>
        <p className="m-0 h-25">Student</p>
      </div>
    </div>
  );
  
  return (
    <div className="">
      <Navbar
        collapseOnSelect
        className=" d-flex justify-content-around "
        expand="lg"
      >
        <Navbar.Brand href="#home" className="logo_AT ms-3">
         
          ClassTask
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-around"
        >
          <Nav className="mx-2 mh-100">
            <Navbar.Text>
              Welcome, <span className="user-name">{title}</span>{" "}
              <span role="img" aria-label="clapping-hands">
                👏{" "}
              </span>
            </Navbar.Text>
          </Nav>
          <Nav className="align-items-center flex-grow-1 justify-content-evenly mh-100">
            <Form className="d-flex position-relative">
              <Form.Control
                type="search"
                placeholder="Search here ..."
                className="me-2"
                aria-label="Search"
              />
              <BsSearch
                role="button"
                className="student__search position-absolute top-50 end-0 translate-middle"
              />
            </Form>
            <IoNotificationsOutline
              className="student__notify d-sm-none d-lg-block"
              role="button"
            />
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
                <Link  to="/">Log Out</Link>
              </NavDropdown>{" "}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>{" "}
    </div>
  );
};
export default StudentNav;
