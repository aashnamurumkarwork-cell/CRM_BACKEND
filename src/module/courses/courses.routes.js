import express from "express";
import { createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse
 } from "./courses.controller.js";

const router = express.Router();

router.post("/crete",createCourse);
router.get("/getall", getCourses);
router.get("/getby/:id", getCourseById);
router.put("/update/:id", updateCourse);
router.delete("/delete/:id", deleteCourse);

export default router;