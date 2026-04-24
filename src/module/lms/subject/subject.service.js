import pool from "../../../config/config.db.js";
import * as Q from "./subject.query.js";

// CREATE
export const createSubject = async (data) => {
  const { course_id, name } = data;

  if (!name) throw new Error("Subject name required");
  if (!course_id) throw new Error("Course ID required");

  const [result] = await pool.execute(Q.CREATE_SUBJECT, [
    course_id,
    name
  ]);

  return { id: result.insertId };
};

// GET ALL
export const getSubjects = async () => {
  const [rows] = await pool.execute(Q.GET_ALL_SUBJECTS);
  return rows;
};

// GET BY ID
export const getSubjectById = async (id) => {
  const [rows] = await pool.execute(Q.GET_SUBJECT_BY_ID, [id]);

  if (rows.length === 0) {
    throw new Error("Subject not found");
  }

  return rows[0];
};

// GET BY COURSE
export const getSubjectsByCourse = async (course_id) => {
  const [rows] = await pool.execute(Q.GET_SUBJECTS_BY_COURSE, [course_id]);
  return rows;
};

// UPDATE
export const updateSubject = async (id, data) => {
  const { course_id, name } = data;

  const [result] = await pool.execute(Q.UPDATE_SUBJECT, [
    course_id,
    name,
    id
  ]);

  if (result.affectedRows === 0) {
    throw new Error("Subject not found or not updated");
  }

  return { message: "Subject updated successfully" };
};

// DELETE
export const deleteSubject = async (id) => {
  const [result] = await pool.execute(Q.DELETE_SUBJECT, [id]);

  if (result.affectedRows === 0) {
    throw new Error("Subject not found or not deleted");
  }

  return { message: "Subject deleted successfully" };
};