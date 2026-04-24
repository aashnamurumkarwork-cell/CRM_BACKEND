import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} from "./employee.controller.js";

const router = express.Router();

router.post("/create", createEmployee);
router.get("/getallempl", getEmployees);
router.get("/getempby/:id", getEmployeeById);
router.put("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);

export default router;