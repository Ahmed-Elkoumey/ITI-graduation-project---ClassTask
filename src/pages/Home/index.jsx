import "./home.css";
import "./charcter.css";
import "./teacherresponsice.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { FaRegAddressCard } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import Sidemenu from "../../components/Shared/Sidemenu/Sidebar";
import Navbart from "../../components/Shared/Navbart";

function DashBoard() {
  const [data, setData] = useState([]);

  const param = useParams();

  useEffect(() => {
    return () => {
      userDetails();
    };
  }, []);

  const userDetails = () => {
    try {
      fetch(`http://localhost:3000/users/${param.id}`)
        .then((res) => res.json())
        .then((json) => setData(json));
    } catch {
      throw Error;
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <>
      <Navbart title={`${data.Fname} ${data.Lname}`} pic={data.photo} />
      <Sidemenu title={`${data.Fname} ${data.Lname}`}>
        <div className=" container">
          <div className="row">
            <div className=" d-flex flex-column align-content-center flex-wrap   container1 ">
              {/*** ************************************** first card **********************************/}
              <div className="mb-2 d-flex flex-wrap   home">
                <div className="total me-5">
                  <p>
                    {" "}
                    Total students are
                    <br />
                    <p className="value">50 Students</p>
                  </p>
                </div>
                {/********************************************  character */}
                <div class="wrapper">
                  <div class="border-circle" id="one"></div>
                  <div class="border-circle" id="two"></div>
                  <div class="background-circle">
                    <div class="triangle-light"></div>
                    <div class="body"></div>
                    <div className=" ms-5">
                      <span class="shirt-text ms-5 ">Class</span>

                      <span class="shirt-text">Task</span>
                    </div>

                    <div class="triangle-dark"></div>
                  </div>
                  <div class="head">
                    <div class="ear" id="left"></div>
                    <div class="ear" id="right"></div>
                    <div class="hair-main">
                      <div class="sideburn" id="left"></div>
                      <div class="sideburn" id="right"></div>
                      <div class="hair-top"></div>
                    </div>
                    <div class="face">
                      <div class="hair-bottom"></div>
                      <div class="nose"></div>
                      <div class="eye-shadow" id="left">
                        <div class="eyebrow"></div>
                        <div class="eye"></div>
                      </div>
                      <div class="eye-shadow" id="right">
                        <div class="eyebrow"></div>
                        <div class="eye"></div>
                      </div>
                      <div class="mouth"></div>
                      <div class="shadow-wrapper">
                        <div class="shadow"></div>
                      </div>
                    </div>
                  </div>
                  <span class="music-note" id="one">
                    &#9835;
                  </span>
                  <span class="music-note" id="two">
                    &#9834;
                  </span>
                </div>

                {/********************************************************* * character *************************/}
                {/*** ************************************** second card **********************************/}
                <div className="total ms-4">
                  <p>
                    {" "}
                    Total classes are
                    <br /> <p className="value">5 classes</p>
                  </p>
                </div>
              </div>

              <div className=" d-flex flex-wrap">
                <div>
                  <Button
                    variant="primary"
                    onClick={handleShow1}
                    className="button-56 ms-5 mb-3"
                  >
                    Add new Class <FaRegAddressCard className=" ms-3" />
                  </Button>
                  <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton className="header-popup">
                      <Modal.Title>Add new class</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Class Name</Form.Label>
                          <Form.Control placeholder=" English M2" autoFocus />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Class discription </Form.Label>
                          <Form.Control as="textarea" />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer className="footer-popup">
                      <Button variant="secondary" onClick={handleClose1}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose1}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div>
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="button-56 ms-5 "
                  >
                    View Classes <FaSchool className=" ms-3" />
                  </Button>

                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton className="header-popup">
                      <Modal.Title> Your Classes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="body-popup">
                      <Table bordered hover>
                        <thead>
                          <tr>
                            <th>Class ID</th>
                            <th> Class</th>
                            <th>No .of students</th>
                            <th>
                              {" "}
                              <Button variant="danger">Delete All</Button>{" "}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="id">#12583A</td>
                            <td className="cell">
                              <Link
                                to={`/Allclasses/${param.id}`}
                                className="cell"
                              >
                                {" "}
                                Math J4
                              </Link>
                            </td>
                            <td className="cell">50</td>
                            <td>
                              <Button variant="danger">Delete </Button>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Modal.Body>
                    <Modal.Footer className="footer-popup">
                      <Button variant="secondary" onClick={handleClose}>
                        close
                      </Button>
                      <Button variant="primary">save</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidemenu>
    </>
  );
}
export default DashBoard;
