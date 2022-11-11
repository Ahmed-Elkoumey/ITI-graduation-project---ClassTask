import StudentNav from "../../components/student/student-nav";
import UserAvatar from "../../assets/girl.jpg";
import StudentTasks from "../../components/student/Studenttasks";
import "./style.css";
import "./responsive.css"
import Sidemenu from "../../components/student/Sidemenustd/Sidebar";
import { FaChild}from "react-icons/fa";
import { FaChalkboardTeacher}from "react-icons/fa";
const Student = () => {

  return (
    <div className="student">
    <StudentNav /> 
     
       <Sidemenu>
      
        <div className="container bodyst1">
        <div className="row"> 
        <div className=" d-flex flex-wrap">
      <div class="paper  mt-5">
    <div class="paper-content ">
     
      {/* <img src={UserAvatar} alt='user' className=" img-fluid student__photo "></img> */}
        <div className="textareaall">
        <p className="textarea1 text-dark ">Student <span className="dataarea  fa-10x"><FaChild/></span></p>
          <p className="textarea1">Name:<span className="dataarea">Sara Ahmed</span></p>
          <p className="textarea1">ID:<span className="dataarea">#54414</span></p>
          <p className="textarea1">Date Of Birth:<span className="dataarea">1/10/2013</span></p>
          <p className="textarea1">Email:<span className="dataarea">SaraA@gmail.com</span></p>
          <p className="textarea1">Class:<span className="dataarea">Junior-4</span></p>
          <p className="textarea1">  Enrollrd classes<span className="dataarea">Math -English</span></p>
        </div>
        </div>
        </div>
        <div class="paper1  mt-5">
    <div class="paper-content d-flex ">
     

        <div className="textareaall">
        <p className="textarea2 text-dark ">Parent<span className="dataarea  fa-10x"><FaChalkboardTeacher/></span></p>
          <p className="textarea2">Name:<span className="dataarea"> Ahmed Abdelfattah</span></p>
          <p className="textarea2">PhoneNumber:<span className="dataarea">01236554789</span></p>
         
          <p className="textarea2">Email:<span className="dataarea">Ahmed898@gmail.com</span></p>
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
