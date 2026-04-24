import * as service from "./folloup.service.js";

// CREATE FOLLOWUP
export const createFollowup = async (req, res) => {
  try {
    const result = await service.createFollowup(req.body);

    return res.status(201).json({
      success: true,
      message: "Followup created successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error creating followup",
      error: err.message
    });
  }
};


// GET ALL FOLLOWUPS
export const getFollowups = async (req, res) => {
  try {
    const data = await service.getFollowups();

    return res.status(200).json({
      success: true,
      message: "Followups fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching followups",
      error: err.message
    });
  }
};


// GET FOLLOWUP BY ID
export const getFollowupById = async (req, res) => {
  try {
    console.log("PARAMS:", req.params);
    console.log("ID:", req.params.id);


    const data = await service.getFollowupById(req.params.id);
    console.log(data)

    return res.status(200).json({
      success: true,
      message: "Followup fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching followup",
      error: err.message
    });
  }
};


// GET FOLLOWUPS BY LEAD
export const getFollowupsByLead = async (req, res) => {
  try {
    const data = await service.getFollowupsByLead(req.params.lead_id);

    return res.status(200).json({
      success: true,
      message: "Followups fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching followups",
      error: err.message
    });
  }
};


// UPDATE FOLLOWUP
export const updateFollowup = async (req, res) => {
  try {
    const result = await service.updateFollowup(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Followup updated successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error updating followup",
      error: err.message
    });
  }
};


// DELETE FOLLOWUP
export const deleteFollowup = async (req, res) => {
  try {
    const result = await service.deleteFollowup(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Followup deleted successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error deleting followup",
      error: err.message
    });
  }
};


// 🔥 ADD LOG
export const addFollowupLog = async (req, res) => {
  try {
    const result = await service.addLog(req.body);

    return res.status(201).json({
      success: true,
      message: "Log added successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error adding log",
      error: err.message
    });
  }
};


// 🔥 GET LOGS
export const getLogsByFollowup = async (req, res) => {
  try {
    const data = await service.getLogs(req.params.followup_id);

    return res.status(200).json({
      success: true,
      message: "Logs fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching logs",
      error: err.message
    });
  }
};


// 🔥 DELETE LOG
export const deleteFollowupLog = async (req, res) => {
  try {
    console.log("DELETE ID:", req.params.id);
    const result = await service.deleteLog(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Log deleted successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error deleting log",
      error: err.message
    });
  }
};