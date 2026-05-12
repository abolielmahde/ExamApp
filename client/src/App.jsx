import TeacherDashboard from "./TeacherDashboard";
import StudentPortal from "./StudentPortal";

function App() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Exam App</h1>

      <div className="row g-4">
        <div className="col-md-6">
          <TeacherDashboard />
        </div>

        <div className="col-md-6">
          <StudentPortal />
        </div>
      </div>
    </div>
  );
}

export default App;