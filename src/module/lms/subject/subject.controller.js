import * as service from "./subject.service.js";

// CREATE
export const createSubject = async (req, res) => {
  try {
    const result = await service.createSubject(req.body);

    res.status(201).json({
      success: true,
      message: "Subject created successfully",
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
export const getSubjects = async (req, res) => {
  try {
    const data = await service.getSubjects();

    res.status(200).json({
      success: true,
      message: "Subjects fetched successfully",
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
export const getSubjectById = async (req, res) => {
  try {
    const data = await service.getSubjectById(req.params.id);

    res.status(200).json({
      success: true,
      message: "Subject fetched successfully",
      data
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message
    });
  }
};

// GET BY COURSE
export const getSubjectsByCourse = async (req, res) => {
  try {
    const data = await service.getSubjectsByCourse(req.params.course_id);

    res.status(200).json({
      success: true,
      message: "Subjects fetched by course",
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
export const updateSubject = async (req, res) => {
  try {
    const result = await service.updateSubject(req.params.id, req.body);

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
export const deleteSubject = async (req, res) => {
  try {
    const result = await service.deleteSubject(req.params.id);

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