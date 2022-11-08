import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const Navigationbar = (props) => {
  return (
    <Navbar className="navbar p-2" collapseOnSelect expand="sm">
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="d-flex align-items-center w-100 ">
          <h2 className="ms-2 text-light">
            <Link to="/">ClassTask</Link>
          </h2>

          <div className="navLinks d-flex ms-auto">
            <NavLink href={`#${props.hero}`}>About us</NavLink>
            <NavLink href={`#${props.services}`}>Services </NavLink>
            <NavLink href={`#${props.vision}`}>Vision</NavLink>
            <NavLink href={`#${props.member}`}>Plans</NavLink>
            <NavLink href={`#${props.footer}`}>Footer</NavLink>
          </div>

          <div className="login d-flex ms-auto me-2">
            <div>
              <Link
                className="mx-2 text-decoration-none text-black"
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
            <div>
              <Link
                className="mx-2 text-decoration-none text-black"
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
