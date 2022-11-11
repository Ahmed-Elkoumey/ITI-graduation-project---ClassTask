import "./Allclass.css";
import './classresponsive.css'
import DatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import std1 from "./avatar-ebd2b8ace0fe7e957f6d19ae33582675.jpg";
import Navbart from "../../components/Shared/Navbart";
import Sidemenu from "../../components/Shared/Sidemenu/Sidebar";

import {useParams} from "react-router-dom";
import { useEffect } from "react";


function AllClasses() {

  
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
 


  const [startDate, setStartDate] = useState(new Date());
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
   
    <>
    
    <Navbart title={`${data.Fname} ${data.Lname}`} pic={data.photo}/>
    <Sidemenu title={`${data.Fname} ${data.Lname}`} >
      <div className="container">
      <div className="row">
    <div className=" mt-3 ms-3 ">
        <div className=" d-flex align-baseline">
      <h4 className="headinf ">Class </h4>
      <h4 className="info">(Math J4)</h4>
      </div>
      <div>
        
      </div>
  
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
                  <Form.Group
                    className="mb-3"
                  >
                  
                 
                  </Form.Group>
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
                    <Form.Control placeholder=" English M2" autoFocus />
                    
                  </Form.Group>
                  
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Task discription </Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                  >
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='date_AT' />
                 
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="footer-popup">
                <Button variant="secondary" onClick={handleClose1}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose1}>
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
          <tr>
            <td>1</td>
            <td className="colm2">
              {" "}
              <div className="img">
                <img className=" rounded-circle img-fluid" src={std1}></img>{" "}
              </div>
            </td>
            <td>Otto</td>
            <td>Mark</td>
            <td>1</td>
            <td className=" d-flex justify-content-between">
              <div><a>https://drive.google.com/drive/my-drive</a></div>
              <div class="checkbox-wrapper-26">
                <input type="checkbox" id="_checkbox-26" />
                <label for="_checkbox-26">
                  <div class="tick_mark"></div>
                </label>
              </div>
            </td>
            <td>B+</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="colm2">
              {" "}
              <div className="img">
                <img className=" rounded-circle img-fluid" src={std1}></img>{" "}
              </div>
            </td>
            <td>Otto</td>
            <td>Mark</td>
            <td>1</td>
            <td className=" d-flex justify-content-between">
              <div><a>https://drive.google.com/drive/my-drive</a></div>
              <div class="checkbox-wrapper-26">
                <input type="checkbox" id="_checkbox-25" />
                <label for="_checkbox-25">
                  <div class="tick_mark"></div>
                </label>
              </div>
            </td>
            <td>B+</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="colm2">
              {" "}
              <div className="img">
                <img className=" rounded-circle img-fluid" src={std1}></img>{" "}
              </div>
            </td>
            <td>Otto</td>
            <td>Mark</td>
            <td>1</td>
            <td className=" d-flex justify-content-between">
              <div><a>https://drive.google.com/drive/my-drive</a></div>
              <div class="checkbox-wrapper-26">
                <input type="checkbox" id="_checkbox-23" />
                <label for="_checkbox-23">
                  <div class="tick_mark"></div>
                </label>
              </div>
            </td>
            <td>B+</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="colm2">
              {" "}
              <div className="img">
                <img className=" rounded-circle img-fluid" src={std1}></img>{" "}
              </div>
            </td>
            <td>Otto</td>
            <td>Mark</td>
            <td>1</td>
            <td className=" d-flex justify-content-between">
              <div><a>https://drive.google.com/drive/my-drive</a></div>
              <div class="checkbox-wrapper-26">
                <input type="checkbox" id="_checkbox-20" />
                <label for="_checkbox-20">
                  <div class="tick_mark"></div>
                </label>
              </div>
            </td>
            <td>B+</td>
          </tr>
     
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
