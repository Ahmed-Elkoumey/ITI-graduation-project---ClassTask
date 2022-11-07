import "./style.css";
import Table from "react-bootstrap/Table";
import EmptyTask from "../../../assets/empty-task-list.svg";

const StudentTasks = () => {
  let taskCount = 5;
  if (taskCount < 1) {
    return (
      <section className="student-tasks px-5 py-2">
        <div className="student-tasks__part py-5">
          <h2 className="tasks-title text-center">Tasks List</h2>
          <p className="text-center student-tasks__info">No Tasks For Now</p>
          <div className="empty-poster my-0 mx-auto">
            <img src={EmptyTask} alt="empty-task-list" className="w-100" />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="student-tasks px-5 py-2">
      <div className="student-tasks__part py-5">
        <h2 className="tasks-title text-center">Tasks List</h2>
        <Table bordered hover className="task-table" responsive="lg">
          <thead>
            <tr className="text-center">
              <th>Task Number</th>
              <th>Task Title</th>
              <th>Upload Task</th>
              <th>Dead Line</th>
              <th>Class</th>
              <th>Task Evaluation</th>
              <th>Grade</th>
              <th>Teacher Name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td>Mark</td>
              <td>
                <form action="">
                  <input
                    type="file"
                    id="myFile"
                    name="filename"
                    className="btn btn-danger"
                  />
                  <input
                    type="submit"
                    value="Upload"
                    className="btn btn-primary"
                  />
                </form>
              </td>
              <td>1/1/2022</td>
              <td>Math 4</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>Ahmed Elzoughby</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  );
};
export default StudentTasks;
