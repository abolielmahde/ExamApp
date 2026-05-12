import { exams, studentScores } from "./mock";

export function getExams() {
  return exams;
}

export function getExamById(id) {
  return exams.find((exam) => exam.id === id);
}

export function createExam(newExam) {
  exams.push(newExam);
  return newExam;
}

export function getStudentScores() {
  return studentScores;
}