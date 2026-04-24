import * as service from "./lesson.service.js";

// CREATE
export const createLesson = async (req, res) => {
  try {
    const result = await service.createLesson(req.body);

    res.status(201).json({
      success: true,
      message: "Lesson created successfully",
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
export const getLessons = async (req, res) => {
  try {
    const data = await service.getLessons();

    res.status(200).json({
      success: true,
      message: "Lessons fetched successfully",
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
export const getLessonById = async (req, res) => {
  try {
    const data = await service.getLessonById(req.params.id);

    res.status(200).json({
      success: true,
      message: "Lesson fetched successfully",
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
export const getLessonsBySubject = async (req, res) => {
  try {
    const data = await service.getLessonsBySubject(req.params.subject_id);

    res.status(200).json({
      success: true,
      message: "Lessons fetched by subject",
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
export const updateLesson = async (req, res) => {
  try {
    const result = await service.updateLesson(req.params.id, req.body);

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
export const deleteLesson = async (req, res) => {
  try {
    const result = await service.deleteLesson(req.params.id);

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