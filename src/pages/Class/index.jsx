import "./Allclass.css";
import "./classresponsive.css";
import DatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import std1 from "./avatar-ebd2b8ace0fe7e957f6d19ae33582675.jpg";
import Navbart from "../../components/Shared/Navbart";
import Sidemenu from "../../components/Shared/Sidemenu/Sidebar";

import Kid1 from "./assets/img/kid1.jpg";
import Kid2 from "./assets/img/kid2.jpg";
import Kid3 from "./assets/img/kid3.jpg";
import Kid4 from "./assets/img/kid4.jpg";
import homeWork from "./assets/Homework.pdf";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

function AllClasses() {
  const [students, setstudents] = useState([
    {
      id: 1,
      photo: Kid1,
      first_name: "Jared",
      last_name: "Welden",
    },
    {
      id: 2,
      photo: Kid2,
      first_name: "Reeva",
      last_name: "Sinclair",
    },
    {
      id: 3,
      photo: Kid3,
      first_name: "Ina",
      last_name: "Novotni",
    },
    {
      id: 4,
      photo: Kid4,
      first_name: "Kaylil",
      last_name: "Firmin",
    },
  ]);

  const [kids, setKids] = useState([Kid1, Kid2, Kid3, Kid4]);
  const [data, setData] = useState([]);

  const [task, setTask] = useState({
    taskTitle: "",
    taskDesc: "",
  });

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

  const handelTask = () => {
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then((res) => res.json());
    console.log(task);
  };

  const [startDate, setStartDate] = useState(new Date());

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <>
      <Navbart title={`${data.Fname} ${data.Lname}`} pic={data.photo} />
      <Sidemenu title={`${data.Fname} ${data.Lname}`}>
        <div className="container">
          <div className="row">
            <div className=" mt-3 ms-3 ">
              <div className=" d-flex align-baseline">
                <h4 className="headinf ">Class </h4>
                <h4 className="info">(Math J4)</h4>
              </div>
              <div></div>

              <Button
                variant="primary"
                onClick={handleShow2}
                className="addstd mb-2"
              >
                Add New student
              </Button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton className="header-popup">
                  <Modal.Title>Student Data </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput2"
                    >
                      <Form.Label>Student Id</Form.Label>
                      <Form.Control placeholder=" ex:#123654" autoFocus />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextInput3"
                    >
                      <Form.Label>first name</Form.Label>
                      <Form.Control placeholder=" ex:Ali" autoFocus />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextInput3"
                    >
                      <Form.Label>Last name</Form.Label>
                      <Form.Control placeholder=" ex:Mohamed" autoFocus />
                    </Form.Group>
                    <Form.Group className="mb-3"></Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="footer-popup">
                  <Button variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>

                  <Button variant="primary" onClick={handleClose2}>
                    Add student
                  </Button>
                </Modal.Footer>
              </Modal>

              <Button
                variant="primary"
                onClick={handleShow1}
                className="addstd mb-2"
              >
                Add Task
              </Button>
              <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton className="header-popup">
                  <Modal.Title>Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Task title</Form.Label>
                      <Form.Control
                        placeholder=" English M2"
                        autoFocus
                        value={task.taskTitle}
                        onChange={(e) =>
                          setTask({ ...task, taskTitle: e.target.value })
                        }
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Task discription </Form.Label>
                      <Form.Control
                        as="textarea"
                        value={task.taskDesc}
                        onChange={(e) =>
                          setTask({ ...task, taskDesc: e.target.value })
                        }
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) =>
                          setTask({ ...task, deadLine: task.deadLine })
                        }
                        className="date_AT"
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="footer-popup">
                  <Button variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handelTask}>
                    Add Task
                  </Button>
                </Modal.Footer>
              </Modal>

              <Table bordered hover className="table" responsive="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Personal image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>number of tasks</th>
                    <th>Review task</th>
                    <th>Grads</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((item) => (
                    <tr>
                      <td>{item.id}</td>

                      <td className="colm2">
                        {" "}
                        <div className="img">
                          <img
                            className=" rounded-circle  img-fluid"
                            src={item.photo}
                          />
                        </div>
                      </td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>1</td>
                      <td className=" d-flex justify-content-between">
                        <div>
                          <a
                            href={homeWork}
                            className="btn btn-success"
                            download
                          >
                            DownLoad Task
                          </a>
                        </div>
                        <div class="checkbox-wrapper-26">
                          <input type="checkbox" id="_checkbox-26" />
                          <label for="_checkbox-26">
                            <div class="tick_mark"></div>
                          </label>
                        </div>
                      </td>
                      <td className="col-3">
                        <div className="d-flex">

                        <Form.Control className="d-flex w-50 me-3" type="text" />
                       <button className="btn btn-primary w-25">Send</button>
                        </div>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Sidemenu>
    </>
  );
}
export default AllClasses;
