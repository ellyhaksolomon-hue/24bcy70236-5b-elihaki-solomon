import express from "express";
import {
  getStudents,
  createStudent,
  deleteStudent,
  editStudentPage,
  updateStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudents);

router.post("/students", createStudent);

router.get("/edit/:id", editStudentPage);

router.post("/update/:id", updateStudent);

router.get("/delete/:id", deleteStudent);

router.get("/new", (req, res) => {
    res.render("new");
});

export default router;