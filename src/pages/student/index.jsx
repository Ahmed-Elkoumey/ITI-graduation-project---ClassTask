import StudentNav from "../../components/student/student-nav";
import UserAvatar from "../../assets/girl.jpg";
import StudentTasks from "../../components/student/Studenttasks";
import "./style.css";
import "./responsive.css";
import Sidemenu from "../../components/student/Sidemenustd/Sidebar";
import { FaChild } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Student = () => {
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

  return (
    <div className="student">
      <StudentNav title={`${data.Fname} ${data.Lname}`} pic={data.photo} />

      <Sidemenu  title={`${data.Fname} ${data.Lname}`} pic={data.photo}>
        <div className="container bodyst1">
          <div className="row">
            <div className=" d-flex flex-wrap">
              <div class="paper  mt-5">
                <div class="paper-content ">
                  {/* <img src={UserAvatar} alt='user' className=" img-fluid student__photo "></img> */}
                  <div className="textareaall">
                    <p className="textarea1 text-dark ">
                      Student{" "}
                      <span className="dataarea  fa-10x">
                        <FaChild />
                      </span>
                    </p>
                    <p className="textarea1">
                      Name:
                      <span className="dataarea">
                        {data.Fname} {data.Lname}
                      </span>
                    </p>
                    <p className="textarea1">
                      ID:<span className="dataarea">{data.id}</span>
                    </p>
                   
                    <p className="textarea1">
                      Email:<span className="dataarea">{data.email}</span>
                    </p>
                   
                  </div>
                </div>
              </div>
              <div class="paper1  mt-5">
                <div class="paper-content d-flex ">
                  <div className="textareaall">
                    <p className="textarea2 text-dark ">
                      Parent
                      <span className="dataarea  fa-10x">
                        <FaChalkboardTeacher />
                      </span>
                    </p>
                    <p className="textarea2">
                      Name:<span className="dataarea"> {data.nameFather}</span>
                    </p>
                    <p className="textarea2">
                      PhoneNumber:<span className="dataarea">{data.phoneFather}</span>
                    </p>

                    <p className="textarea2">
                      Email:<span className="dataarea">{data.emailFather}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidemenu>
    </div>
  );
};
export default Student;
