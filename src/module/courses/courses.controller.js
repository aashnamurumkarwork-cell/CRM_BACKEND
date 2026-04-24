import * as service from "./courses.service.js";

// CREATE
export const createCourse = async (req, res) => {
  try {
    const result = await service.createCourse(req.body);

    return res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error creating course",
      error: err.message
    });
  }
};

// GET ALL
export const getCourses = async (req, res) => {
  try {
    const data = await service.getCourses();

    return res.status(200).json({
      success: true,
      message: "Courses fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching courses",
      error: err.message
    });
  }
};

// GET BY ID
export const getCourseById = async (req, res) => {
  try {
    const data = await service.getCourseById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Course fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching course",
      error: err.message
    });
  }
};

// UPDATE
export const updateCourse = async (req, res) => {
  try {
    const result = await service.updateCourse(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error updating course",
      error: err.message
    });
  }
};

// DELETE
export const deleteCourse = async (req, res) => {
  try {
    const result = await service.deleteCourse(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error deleting course",
      error: err.message
    });
  }
};