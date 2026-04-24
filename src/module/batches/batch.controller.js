import * as service from "./batch.service.js";

// CREATE
export const createBatch = async (req, res) => {
  try {
    const result = await service.createBatch(req.body);

    return res.status(201).json({
      success: true,
      message: "Batch created successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error creating batch",
      error: err.message
    });
  }
};

// GET ALL
export const getBatches = async (req, res) => {
  try {
    const data = await service.getBatches();

    return res.status(200).json({
      success: true,
      message: "Batches fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching batches",
      error: err.message
    });
  }
};

// GET BY ID
export const getBatchById = async (req, res) => {
  try {
    const data = await service.getBatchById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Batch fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching batch",
      error: err.message
    });
  }
};

// UPDATE
export const updateBatch = async (req, res) => {
  try {
    const result = await service.updateBatch(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Batch updated successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error updating batch",
      error: err.message
    });
  }
};

// DELETE
export const deleteBatch = async (req, res) => {
  try {
    const result = await service.deleteBatch(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Batch deleted successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error deleting batch",
      error: err.message
    });
  }
};