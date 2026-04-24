import express from "express";
import * as controller from "./subject.controller.js";

const router = express.Router();

router.post("/create", controller.createSubject);
router.get("/getall", controller.getSubjects);
router.get("/getby/:id", controller.getSubjectById);
router.get("/course/:course_id", controller.getSubjectsByCourse);
router.put("/update/:id", controller.updateSubject);
router.delete("/delete/:id", controller.deleteSubject);

export default router;