import Student from "../models/Student.js";

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.render("index", { students });
};

export const createStudent = async (req, res) => {
  const { name, roll } = req.body;
  await Student.create({ name, roll });
  res.redirect("/");
};

export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
};

export const editStudentPage = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.render("edit", { student });
};

export const updateStudent = async (req, res) => {
  const { name, roll } = req.body;
  await Student.findByIdAndUpdate(req.params.id, { name, roll });
  res.redirect("/");
};