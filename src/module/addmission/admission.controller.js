import * as service from "./admission.service.js";

// CREATE
export const createAdmission = async (req, res) => {
  try {
    const result = await service.createAdmission(req.body);

    return res.status(201).json({
      success: true,
      message: "Admission created successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error creating admission",
      error: err.message
    });
  }
};

// GET ALL
export const getAdmissions = async (req, res) => {
  try {
    const data = await service.getAdmissions();

    return res.status(200).json({
      success: true,
      message: "Admissions fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching admissions",
      error: err.message
    });
  }
};

// GET BY ID
export const getAdmissionById = async (req, res) => {
  try {
    const data = await service.getAdmissionById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Admission fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching admission",
      error: err.message
    });
  }
};

// UPDATE
export const updateAdmission = async (req, res) => {
  try {
    const result = await service.updateAdmission(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Admission updated successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error updating admission",
      error: err.message
    });
  }
};

// DELETE
export const deleteAdmission = async (req, res) => {
  try {
    const result = await service.deleteAdmission(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Admission deleted successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error deleting admission",
      error: err.message
    });
  }
};