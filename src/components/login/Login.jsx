import "./login.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Navigationbar from "../Home/Navigationbar";
import { useState } from "react";

const Login = () => {
  // const goToLogin = useNavigate();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
  });
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   goToLogin("/student");
  // };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) =>
        data.user.role === "teacher"
          ? navigate(`/dashboard/${data.user.id}`)
          : navigate(`/student/${data.user.id}`)
      );
  }
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="form-wrapper">
      <Navigationbar />
      <div className="container">
        <Form className="form" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            name="email"
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
