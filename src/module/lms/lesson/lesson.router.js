import express from "express";
import * as controller from "./lesson.controller.js";

const router = express.Router();

router.post("/create", controller.createLesson);
router.get("/getall", controller.getLessons);
router.get("/getby/:id", controller.getLessonById);
router.get("/subject/:subject_id", controller.getLessonsBySubject);
router.put("/update/:id", controller.updateLesson);
router.delete("/delete/:id", controller.deleteLesson);

export default router;