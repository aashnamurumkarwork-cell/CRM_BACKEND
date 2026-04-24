import * as service from "./lead.service.js";

// CREATE
export const createLead = async (req, res) => {
  try {
    const result = await service.createLead(req.body);

    return res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error creating lead",
      error: err.message
    });
  }
};

// GET ALL
export const getLeads = async (req, res) => {
  try {
    const data = await service.getLeads();

    return res.status(200).json({
      success: true,
      message: "Leads fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching leads",
      error: err.message
    });
  }
};

// GET BY ID
export const getLeadById = async (req, res) => {
  try {
    const data = await service.getLeadById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Lead fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching lead",
      error: err.message
    });
  }
};

// UPDATE
export const updateLead = async (req, res) => {
  try {
    const result = await service.updateLead(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Lead updated successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error updating lead",
      error: err.message
    });
  }
};

// DELETE
export const deleteLead = async (req, res) => {
  try {
    const result = await service.deleteLead(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error deleting lead",
      error: err.message
    });
  }
};