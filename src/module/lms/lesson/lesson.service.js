import pool from "../../../config/config.db.js";
import * as Q from "./lesson.queries.js";

// CREATE
export const createLesson = async (data) => {
  const { subject_id, title } = data;

  if (!subject_id) throw new Error("Subject ID required");
  if (!title) throw new Error("Lesson title required");

  const [result] = await pool.execute(Q.CREATE_LESSON, [
    subject_id,
    title
  ]);

  return { id: result.insertId };
};

// GET ALL
export const getLessons = async () => {
  const [rows] = await pool.execute(Q.GET_ALL_LESSONS);
  return rows;
};

// GET BY ID
export const getLessonById = async (id) => {
  const [rows] = await pool.execute(Q.GET_LESSON_BY_ID, [id]);

  if (rows.length === 0) {
    throw new Error("Lesson not found");
  }

  return rows[0];
};

// GET BY SUBJECT
export const getLessonsBySubject = async (subject_id) => {
  const [rows] = await pool.execute(Q.GET_LESSONS_BY_SUBJECT, [subject_id]);
  return rows;
};

// UPDATE
export const updateLesson = async (id, data) => {
  const { subject_id, title } = data;

  const [result] = await pool.execute(Q.UPDATE_LESSON, [
    subject_id,
    title,
    id
  ]);

  if (result.affectedRows === 0) {
    throw new Error("Lesson not found or not updated");
  }

  return { message: "Lesson updated successfully" };
};

// DELETE
export const deleteLesson = async (id) => {
  const [result] = await pool.execute(Q.DELETE_LESSON, [id]);

  if (result.affectedRows === 0) {
    throw new Error("Lesson not found or not deleted");
  }

  return { message: "Lesson deleted successfully" };
};