import { BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import UserAvatar from "../../assets/user-avatar.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form } from "react-bootstrap";

import "./style.css";
const StudentNav = () => {
  let userInfo = (
    <div className="d-flex rounded-pill p-3 user-info">
      <img src={UserAvatar} alt="user-avatar" className="rounded-circle me-2" />
      <div>
        <h3 className="mb-1 user-name">User Name</h3>
        <p className="mt-0">Student</p>
      </div>
    </div>
  );
  return (
    <Navbar collapseOnSelect expand="lg" className="student-nav">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-around"
        >
          <Nav className="mx-5">
            <Navbar.Text>
              Welcome, <span className="user-name">User Name</span>{" "}
              <span role="img" aria-label="clapping-hands">
                👏{" "}
              </span>
            </Navbar.Text>
          </Nav>
          <Nav className="align-items-center flex-grow-1 justify-content-evenly">
            <Form className="d-flex position-relative">
              <Form.Control
                type="search"
                placeholder="Search here ..."
                className="me-2"
                aria-label="Search"
              />
              <BsSearch
                role="button"
                className="fs-3 position-absolute top-50 end-0 translate-middle"
              />
            </Form>
            <IoNotificationsOutline
              className="fs-3 d-sm-none d-lg-block"
              role="button"
            />
            <NavDropdown title={userInfo} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Classes</NavDropdown.Item>
              <NavDropdown.Item href="#">Tasks</NavDropdown.Item>
              <NavDropdown.Item href="#">Calender</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default StudentNav;
