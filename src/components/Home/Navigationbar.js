import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
const Navigationbar = (props) => {
  return (
    <Navbar className="navbar p-2 mb-5" collapseOnSelect expand="xl">
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="d-flex align-items-center w-100 ">
          <h2 className="ms-2  logo_Ash ">
            <Link to="/">Classtask</Link>
          </h2>

          <div className="navLinks d-flex  ">
            <NavLink href={`#${props.hero}`}>About us</NavLink>
            <NavLink href={`#${props.services}`}>Services </NavLink>
            <NavLink href={`#${props.vision}`}>Vision</NavLink>
            <NavLink href={`#${props.member}`}>Plans</NavLink>
            <NavLink href={`#${props.footer}`}>Footer</NavLink>
          </div>

          <div className="login d-flex flex-wrap ms-auto ">
            <div>
              <Link
                className="mx-2 text-decoration-none  login "
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
            <div>
              <Link
                className="mx-2 text-decoration-none login "
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
