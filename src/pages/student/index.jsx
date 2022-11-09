import StudentNav from "../../components/student/student-nav";
import UserAvatar from "../../assets/girl.jpg";
import StudentTasks from "../../components/student/Studenttasks";
import "./style.css";
import Sidemenu from "../../components/student/Sidemenustd/Sidebar";
import { FaChild}from "react-icons/fa";
import { FaChalkboardTeacher}from "react-icons/fa";
const Student = () => {

  return (
    <div>
      <StudentNav />
      <Sidemenu>
      <div class="paper  mt-5">
    <div class="paper-content d-flex">
      <img src={UserAvatar} alt='user' className=" img-fluid student__photo "></img>
        <div className="textareaall">
        <p className="textarea1">Student <span className="dataarea  fa-10x"><FaChild/></span></p>
          <p className="textarea1">Name:<span className="dataarea">Sara Ahmed</span></p>
          <p className="textarea1">ID:<span className="dataarea">#54414</span></p>
          <p className="textarea1">Date Of Birth:<span className="dataarea">1/10/2013</span></p>
          <p className="textarea1">Email:<span className="dataarea">SaraA@gmail.com</span></p>
          <p className="textarea1">Class:<span className="dataarea">Junior-4</span></p>
          <p className="textarea1">  Enrollrd classes<span className="dataarea">Math -English</span></p>
        </div>
        <div className="textarea">
        <p className="textarea2">Parent<span className="dataarea  fa-10x"><FaChalkboardTeacher/></span></p>
          <p className="textarea2">Name:<span className="dataarea"> Ahmed Abdelfattah</span></p>
          <p className="textarea2">PhoneNumber:<span className="dataarea">01236554789</span></p>
         
          <p className="textarea2">Email:<span className="dataarea">Ahmed898@gmail.com</span></p>
        
        </div>
    </div>
</div>
    
<footer>
    Inspired by a <a href="https://dribbble.com/shots/2126836-Inch-x-Inch-Sneak-Peek-2" target="_blank">Dribble</a> by Allan Peters
</footer> 
  
      </Sidemenu>
    </div>
  );
};
export default Student;
