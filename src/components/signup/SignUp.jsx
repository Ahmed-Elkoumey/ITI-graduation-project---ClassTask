import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./../login/login.scss";
import InputGroup from "react-bootstrap/InputGroup";
// Routing
import { useNavigate } from "react-router-dom";
import Navigationbar from "../Home/Navigationbar";
import { registerNew } from "../../Apis/register";
import { useState } from "react";
import logo from '../Home/assest/logooo.png'
import './signUp.css'
const SignUp = () => {
  const [isStudent, setIsStudent] = useState(false);

  const [pdfFile, setPdfFile] = useState(null);

  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    password: "",
    role: "",
    nameFather: "",
    phoneFather: "",
    emailFather: "",
    picture:null,
  });

  function handleFileChange(e) {
    let fileSelected = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(fileSelected);

    reader.onloadend = (e) => {
      setPdfFile(e.target.result);
      console.log(e.target.result);
      setFormData({...formData , picture:e.target.result});
    };
    console.log(formData.picture);
  }



  const goToLogin = useNavigate();
  const handelSingUp = (e) => {
    e.preventDefault();
    console.log(formData);
    registerNew({
      Fname: formData.Fname,
      Lname: formData.Lname,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      nameFather: formData.nameFather,
      phoneFather: formData.phoneFather,
      emailFather: formData.emailFather,
      photo: formData.picture,
    }).then((data) => console.log(data));

    goToLogin("/login");
  };
 

  const handleClick = (e) => {
    e.preventDefault();
    goToLogin("/login");
  };

  return (
    <>
     <Navigationbar />
    <div className="form-wrapper">
     
      <div className=" d-flex ">
      <div className="container ">
      
        <Form className="form my-5 d-block" onSubmit={(e) => handelSingUp(e)}>
          
          <InputGroup className="mb-3">
            
            <InputGroup.Text>First and last name</InputGroup.Text>
            <Form.Control
              aria-label="First name"
              value={formData.Fname}
              onChange={(e) =>
                setFormData({ ...formData, Fname: e.target.value })
              }
            />
            <Form.Control
              aria-label="Last name"
              value={formData.Lname}
              onChange={(e) =>
                setFormData({ ...formData, Lname: e.target.value })
              }
            />
          </InputGroup>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
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
            <Form.Control
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Form.Group>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Label className="me-2">Your Role : </Form.Label>
              <Form.Check
                inline
                label="Teacher"
                name="role"
                type={type}
                value="teacher"
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                id={`inline-${type}-1`}
                onClick={(e) => setIsStudent(false)}
              />
              <Form.Check
                inline
                label="Student"
                name="role"
                type={type}
                id={`inline-${type}-2`}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                onClick={(e) => setIsStudent(true)}
              />
            </div>
          ))}

{isStudent &&
<>
<Form.Group className=" m-0" controlId="formBasicEmail">
            <Form.Label>Your Father Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Father Name"
              value={formData.nameFather}
              onChange={(e) =>
                setFormData({ ...formData, nameFather: e.target.value })
              }
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

<Form.Group className=" m-0" controlId="formBasicEmail">
<Form.Label>Enter Your Father email</Form.Label>
<Form.Control
  type="email"
  placeholder="Enter Your Father email"
  value={formData.emailFather}
  onChange={(e) =>
    setFormData({ ...formData, emailFather: e.target.value })
  }
/>
<Form.Text className="text-muted">
  We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

<Form.Group className=" m-0" controlId="formBasicEmail">
            <Form.Label>Enter Your Father Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Father Phone"
              value={formData.phoneFather}
              onChange={(e) =>
                setFormData({ ...formData, phoneFather: e.target.value })
              }
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          </>
          }

          <Form.Label className="me-2">Upload your image </Form.Label>
          <Form.Control type="file" className="mb-2" onChange={handleFileChange}/>
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
    </div>
    </>
  );
};
export default SignUp;
