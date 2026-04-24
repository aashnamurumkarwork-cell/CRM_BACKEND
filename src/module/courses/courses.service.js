import pool from "../../config/config.db.js";
import * as Q from "./couses.quaries.js";

export const createCourse = async (data) => {
  const { name } = data;

  if (!name) throw new Error("Course name required");

  const [result] = await pool.execute(Q.CREATE_COURSE, [name]);

  return { id: result.insertId };
};

// GET ALL
export const getCourses = async () => {
  const [rows] = await pool.execute(Q.GET_ALL_COURSES);
  return rows;
};

// GET BY ID
export const getCourseById = async (id) => {
  const [rows] = await pool.execute(Q.GET_COURSE_BY_ID, [id]);

  if (rows.length === 0) {
    throw new Error("Course not found");
  }

  return rows[0];
};

// UPDATE
export const updateCourse = async (id, data) => {
  const { name } = data;

  const [result] = await pool.execute(Q.UPDATE_COURSE, [name, id]);

  if (result.affectedRows === 0) {
    throw new Error("Course not found or not updated");
  }

  return { message: "Course updated successfully" };
};

// DELETE
export const deleteCourse = async (id) => {
  const [result] = await pool.execute(Q.DELETE_COURSE, [id]);

  if (result.affectedRows === 0) {
    throw new Error("Course not found or not deleted");
  }

  return { message: "Course deleted successfully" };
};