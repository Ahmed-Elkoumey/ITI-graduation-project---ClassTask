import StudentNav from "../../components/student/student-nav";
import UserAvatar from "../../assets/user-avatar.jpg";
import StudentTasks from "../../components/student/student-tasks";
import "./style.css";

const Student = () => {
  return (
    <main>
      <StudentNav />
      <section className="container-fluid py-2 px-4 student">
        <div className="d-flex justify-content-around w-100 my-1">
          <img
            src={UserAvatar}
            alt="user-avatar"
            className="student__photo rounded-circle"
          />
          <div className="d-flex justify-content-around align-items-center">
            <p className="fw-bold fs-3">Name :</p>
            <h2 className="student__title ms-2 fw-bold">User Name</h2>
          </div>
        </div>
        <div className="p-2 border border-warning rounded-4">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h2 className="text-center fw-bold fs-2">Student Details</h2>
              <div className="d-flex justify-content-center gap-2">
                <p>Student Name :</p>
                <p className="student__name">John Doe</p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <p>Student ID :</p>
                <p className="student__id">123456</p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <p>Date Of Birth :</p>
                <p className="student__date">5/12/1992</p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <p>Graduation Year :</p>
                <p className="student__grad-year">2023</p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <p>Enrolled class :</p>
                <p className="student__class">Math 4</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <h2 className="text-center fw-bold fs-2">Parent Details</h2>
              <div className="d-flex justify-content-center gap-2">
                <p>Parent Name:</p>
                <p className="student__parent-name">John Doe</p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <p>Parent Email:</p>
                <p className="student__parent-mail">student@example.com</p>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <p>Parent Number:</p>
                <p className="student__parent-number">012-123456789</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StudentTasks />
    </main>
  );
};
export default Student;
