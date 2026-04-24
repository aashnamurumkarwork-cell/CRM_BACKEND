import pool from "../../config/config.db.js";
import * as Q from "./admission.queries.js";

// CREATE
export const createAdmission = async (data) => {
  const { lead_id, student_name, course_id, batch_id } = data;

  if (!student_name) throw new Error("Student name required");
  if (!course_id) throw new Error("Course required");

  const [result] = await pool.execute(Q.CREATE_ADMISSION, [
    lead_id,
    student_name,
    course_id,
    batch_id
  ]);

  return { id: result.insertId };
};

// GET ALL
export const getAdmissions = async () => {
  const [rows] = await pool.execute(Q.GET_ALL_ADMISSIONS);
  return rows;
};

// GET BY ID
export const getAdmissionById = async (id) => {
  const [rows] = await pool.execute(Q.GET_ADMISSION_BY_ID, [id]);

  if (rows.length === 0) {
    throw new Error("Admission not found");
  }

  return rows[0];
};

// UPDATE
export const updateAdmission = async (id, data) => {
  const { student_name, course_id, batch_id } = data;

  const [result] = await pool.execute(Q.UPDATE_ADMISSION, [
    student_name,
    course_id,
    batch_id,
    id
  ]);

  if (result.affectedRows === 0) {
    throw new Error("Admission not found or not updated");
  }

  return { message: "Admission updated successfully" };
};

// DELETE
export const deleteAdmission = async (id) => {
  const [result] = await pool.execute(Q.DELETE_ADMISSION, [id]);

  if (result.affectedRows === 0) {
    throw new Error("Admission not found or not deleted");
  }

  return { message: "Admission deleted successfully" };
};