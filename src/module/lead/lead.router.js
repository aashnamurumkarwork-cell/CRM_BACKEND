import express from "express";
import { createLead ,
       getLeads,
       getLeadById,
       updateLead,
       deleteLead
 } from "./lead.controller.js";

const router = express.Router();



router.post("/create", createLead);
router.get("/getall", getLeads);
router.get("/getby/:id", getLeadById);
router.put("/update/:id", updateLead);
router.delete("/delete/:id", deleteLead);

export default router;