import StudentNav from "../../components/student/student-nav";
import UserAvatar from "../../assets/user-avatar.jpg";
import StudentTasks from "../../components/student/student-tasks";
import "./style.css";

const Student = () => {
  return (
    <main>
      <StudentNav />
      <section className="p-5 container-fluid student">
        <div className="d-flex justify-content-around w-100 mb-2">
          <img
            src={UserAvatar}
            alt="user-avatar"
            className="student__photo rounded-circle"
          />
          <p className="d-flex w-25 justify-content-around align-items-center">
            Name: <h2 className="student__title ms-2 fw-bold">User Name</h2>
          </p>
        </div>
        <div className="p-5">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h2>Student Details</h2>
              <p>Student Name:</p>
              <p>Student ID:</p>
              <p>Date Of Birth:</p>
              <p>Graduation Year:</p>
              <p>Enrolled class:</p>
            </div>
            <div className="col-md-6 col-sm-12">
              <h2>Parent Details</h2>
              <p>Parent Name:</p>
              <p>Parent Email:</p>
              <p>Parent Number:</p>
            </div>
          </div>
        </div>
      </section>
      <StudentTasks />
    </main>
  );
};
export default Student;
