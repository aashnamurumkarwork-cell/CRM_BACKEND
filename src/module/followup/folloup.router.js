import express from "express";
import * as controller from "./folloup.controller.js";

const router = express.Router();

// FOLLOWUPS
router.post("/create", controller.createFollowup);
router.get("/getall", controller.getFollowups);
router.get("/:id", controller.getFollowupById);
router.get("/lead/:lead_id", controller.getFollowupsByLead);
router.put("/update/:id", controller.updateFollowup);
router.delete("/:id", controller.deleteFollowup);

// LOGS
router.post("/log", controller.addFollowupLog);
router.get("/log/:followup_id", controller.getLogsByFollowup);
router.delete("/delete/:id", controller.deleteFollowupLog);

export default router;