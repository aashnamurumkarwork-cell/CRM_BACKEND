import express from "express";
import * as c from "./paymant.controller.js";

const router = express.Router();

router.post("/create", c.createPayment);
router.get("/getall", c.getPayments);
router.get("/getby/:id", c.getPaymentById);
router.get("/admission/:admission_id", c.getPaymentsByAdmission);
router.put("/update/:id", c.updatePayment);
router.delete("/delete/:id", c.deletePayment);

export default router;
