import { getExams } from "./examService";

function StudentPortal() {
  const exams = getExams();

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="mb-3">Student Portal</h2>

      {exams.map((exam) => (
        <div key={exam.id} className="border rounded p-3 mb-3">
          <h4>{exam.title}</h4>

          {exam.questions.map((question) => (
            <div key={question.id} className="mb-2">
              <strong>{question.text}</strong>
              <input
                className="form-control mt-1"
                placeholder="Enter your answer"
              />
            </div>
          ))}

          <button
            className="btn btn-primary mt-2"
            onClick={() => alert("Exam submitted successfully!")}
          >
            Submit Exam
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentPortal;