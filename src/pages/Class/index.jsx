import "./Allclass.css";

import Table from "react-bootstrap/Table";
import std1 from "./avatar-ebd2b8ace0fe7e957f6d19ae33582675.jpg";
import Navbart from "../../components/Shared/Navbart";
import Sidemenu from "../../components/Shared/Sidemenu/Sidebar";
function AllClasses() {
  return (
    <>
    
    <Navbart />
    <Sidemenu>
      
    <div className=" mt-3 ms-3 ">
        <div className=" d-flex align-baseline">
      <h4 className="headinf ">Class </h4>
      <h4 className="info">(Math J4)</h4>
      </div>
     
      <button className="addstd mb-2">Add student</button>
    
      <Table bordered hover className="table">
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
    
    </Sidemenu>
    </>
  );
}
export default AllClasses;
