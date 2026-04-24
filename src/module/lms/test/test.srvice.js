import pool from "../../../config/config.db.js";
import * as Q from "./test.queries.js";

// CREATE
export const createTest = async (data) => {
  const { subject_id, title } = data;

  if (!subject_id) throw new Error("Subject ID required");
  if (!title) throw new Error("Test title required");

  const [result] = await pool.execute(Q.CREATE_TEST, [
    subject_id,
    title
  ]);

  return { id: result.insertId };
};

// GET ALL
export const getTests = async () => {
  const [rows] = await pool.execute(Q.GET_ALL_TESTS);
  return rows;
};

// GET BY ID
export const getTestById = async (id) => {
  const [rows] = await pool.execute(Q.GET_TEST_BY_ID, [id]);

  if (rows.length === 0) {
    throw new Error("Test not found");
  }

  return rows[0];
};

// GET BY SUBJECT
export const getTestsBySubject = async (subject_id) => {
  const [rows] = await pool.execute(Q.GET_TESTS_BY_SUBJECT, [subject_id]);
  return rows;
};

// UPDATE
export const updateTest = async (id, data) => {
  const { subject_id, title } = data;

  const [result] = await pool.execute(Q.UPDATE_TEST, [
    subject_id,
    title,
    id
  ]);

  if (result.affectedRows === 0) {
    throw new Error("Test not found or not updated");
  }

  return { message: "Test updated successfully" };
};

// DELETE
export const deleteTest = async (id) => {
  const [result] = await pool.execute(Q.DELETE_TEST, [id]);

  if (result.affectedRows === 0) {
    throw new Error("Test not found or not deleted");
  }

  return { message: "Test deleted successfully" };
};