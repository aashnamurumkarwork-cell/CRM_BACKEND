import express from "express";
import {
  createAdmission,
  getAdmissions,
  getAdmissionById,
  updateAdmission,
  deleteAdmission
} from "./admission.controller.js";

const router = express.Router();

// CREATE
router.post("/create", createAdmission);

// GET ALL
router.get("/getall", getAdmissions);

// GET BY ID
router.get("/getby/:id", getAdmissionById);

// UPDATE
router.put("/update/:id", updateAdmission);

// DELETE
router.delete("/delete/:id", deleteAdmission);

export default router;