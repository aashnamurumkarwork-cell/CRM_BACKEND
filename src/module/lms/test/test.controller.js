import * as service from "./test.srvice.js";

// CREATE
export const createTest = async (req, res) => {
  try {
    const result = await service.createTest(req.body);

    res.status(201).json({
      success: true,
      message: "Test created successfully",
      data: result
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// GET ALL
export const getTests = async (req, res) => {
  try {
    const data = await service.getTests();

    res.status(200).json({
      success: true,
      message: "Tests fetched successfully",
      data
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// GET BY ID
export const getTestById = async (req, res) => {
  try {
    const data = await service.getTestById(req.params.id);

    res.status(200).json({
      success: true,
      message: "Test fetched successfully",
      data
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message
    });
  }
};

// GET BY SUBJECT
export const getTestsBySubject = async (req, res) => {
  try {
    const data = await service.getTestsBySubject(req.params.subject_id);

    res.status(200).json({
      success: true,
      message: "Tests fetched by subject",
      data
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// UPDATE
export const updateTest = async (req, res) => {
  try {
    const result = await service.updateTest(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// DELETE
export const deleteTest = async (req, res) => {
  try {
    const result = await service.deleteTest(req.params.id);

    res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message
    });
  }
};