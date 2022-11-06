

import {Nav, Navbar, NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";
const Navigationbar = () =>{
    return (
        <Navbar className="navbar p-4" collapseOnSelect expand="sm">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="d-flex align-items-center w-100 ">

                    <h2 className="ms-2">ClassTask</h2>

                    <div className="navLinks d-flex ms-auto">
                        <NavLink className="#">Services </NavLink>
                        <NavLink className="#">About us</NavLink>
                        <NavLink className="#">Plans</NavLink>
                        <NavLink className="#">Footer</NavLink>
                    </div>

                    <div className="login d-flex ms-auto me-2">
                        <div><a className="mx-2 text-decoration-none text-black" href="#">Sign Up</a></div>  
                        <div><a className="mx-2 text-decoration-none text-black" href="#">Login</a></div>
                    </div>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;
