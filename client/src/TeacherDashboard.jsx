import { getStudentScores } from "./examService";

function TeacherDashboard() {
  const scores = getStudentScores();

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="mb-3">Teacher Dashboard</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Student</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {scores.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherDashboard;