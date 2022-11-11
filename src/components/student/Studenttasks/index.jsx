import "./style.css";
import StudentNav from "../student-nav/index";
 import Sidemenustd from "../Sidemenustd/Sidebar";
import Table from "react-bootstrap/Table";
import React, { useState,useEffect } from 'react';
import {useParams} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EmptyTask from "../../../assets/empty-task-list.svg";

function  Studenttasks() {


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
  // let taskCount = 5;
  // if (taskCount < 1) {
  //   return (
//       <div>
//     <StudentNav />
//     <Sidemenustd>
//       <section className="student-tasks py-2">
//         <div className="student-tasks__container container py-5">
//           <h2 className="tasks-title text-center">Tasks List</h2>
//           <p className="text-center">No Tasks For Now</p>
//           <div className="empty-poster my-0 mx-auto">
//             <img src={EmptyTask} alt="empty-task-list" className="w-100" />
//           </div>
//         </div>
//       </section>
//       </Sidemenustd>
//  </div>
     
    // );
  // }
  return (
    <div>
    <StudentNav title={`${data.Fname} ${data.Lname}`}/>
    <Sidemenustd>
      
    <section className="student-tasks py-2">
      <div className="student-tasks__container container py-5">
        <h2 className="tasks-title text-center">Tasks List</h2>
        <Table bordered hover className="task-table" responsive="lg" >
          <thead>
            <tr className="text-center">
              <th>Task Number</th>
              <th>Task discription</th>
              <th>Upload Task</th>
              <th>Teacher</th>
              <th>Task Evaluation</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td> <Button variant="primary" onClick={handleShow}>
       Task details
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton  className="header-popup">
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodymodal">
        <div class="envelope">
	<div class="envelope__tab"></div>
  <div class="envelope__letter">
		<p>Dear You have a new challange </p>
	</div>
  <div class="envelope--base"></div> 
</div>



         You challange is <br/>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting 
         <p className=" font-weight-bolder">deadline:10/5/2022</p></Modal.Body>
        <Modal.Footer className="footer-popup">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal></td>
              <td>
                <form action="">
                  <input
                    type="file"
                    id="myFile"
                    name="filename"
                    
                  />
                
                </form>
              </td>
              <td>Ahmed Elzohgaby</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
    </Sidemenustd>
  
    </div>
    
  
  );
};
export default Studenttasks;
