import express from "express";
import * as controller from "./test.controller.js";

const router = express.Router();

router.post("/create", controller.createTest);
router.get("/getall", controller.getTests);
router.get("/getby/:id", controller.getTestById);
router.get("/subject/:subject_id", controller.getTestsBySubject);
router.put("/update/:id", controller.updateTest);
router.delete("/delete/:id", controller.deleteTest);

export default router;