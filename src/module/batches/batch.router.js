import express from "express";
import {
  createBatch,
  getBatches,
  getBatchById,
  updateBatch,
  deleteBatch
} from "./batch.controller.js";

const router = express.Router();

// CREATE
router.post("/create", createBatch);

// GET ALL
router.get("/getall", getBatches);

// GET BY ID
router.get("/getby/:id", getBatchById);

// UPDATE
router.put("/update/:id", updateBatch);

// DELETE
router.delete("/delete/:id", deleteBatch);

export default router;