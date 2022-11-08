import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./../login/login.scss";
import InputGroup from "react-bootstrap/InputGroup";
// Routing
import { useNavigate } from "react-router-dom";
import Navigationbar from "../Home/Navigationbar";

const SignUp = () => {
  const goToLogin = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    goToLogin("/login");
  };

  return (
    <div className="form-wrapper">
      <Navigationbar />
      <div className="container">
        <Form className="form mt-5" onSubmit={(e) => handleClick(e)}>
          <InputGroup className="mb-3">
            <InputGroup.Text>First and last name</InputGroup.Text>
            <Form.Control aria-label="First name" />
            <Form.Control aria-label="Last name" />
          </InputGroup>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="phone number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Label className="me-2">Your Role : </Form.Label>
              <Form.Check
                inline
                label="Teacher"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Student"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
          <Form.Label className="me-2">Upload your image </Form.Label>
          <Form.Control type="file" className="mb-2" />
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
          <br />
          <Form.Label className="mt-2 me-2">have an account ? </Form.Label>
          <a onClick={(e) => handleClick(e)} href="/login">
            Login
          </a>
        </Form>
      </div>
    </div>
  );
};
export default SignUp;
