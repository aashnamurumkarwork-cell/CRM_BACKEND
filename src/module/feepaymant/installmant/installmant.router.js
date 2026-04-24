import express from "express";
import * as controller from "./installmant.controller.js";

const router = express.Router();

// CREATE
router.post("/create", controller.createInstallment);

// GET ALL
router.get("/getall", controller.getInstallments);

// GET BY ID
router.get("/getby/:id", controller.getInstallmentById);

// GET BY ADMISSION
router.get("/admission/:admission_id", controller.getInstallmentsByAdmission);

// UPDATE
router.put("/update/:id", controller.updateInstallment);

// DELETE
router.delete("/delete/:id", controller.deleteInstallment);

export default router;