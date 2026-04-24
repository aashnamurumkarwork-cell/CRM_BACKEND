import pool from "../../config/config.db.js";
import * as Q from "./batch.quries.js";

// CREATE
export const createBatch = async (data) => {
  const {
    course_id,
    trainer_id,
    start_date,
    end_date,
    timing
  } = data;

  console.log({
    course_id,
    trainer_id,
    start_date,
    end_date,
    timing
  });

  if (!course_id || !start_date) {
    throw new Error("course_id and start_date required");
  }

  const [result] = await pool.execute(Q.CREATE_BATCH, [
    course_id,
    trainer_id ?? null,
    start_date,
    end_date ?? null,
    timing ?? null
  ]);

  return { id: result.insertId };
};



// GET ALL
export const getBatches = async () => {
  const [rows] = await pool.execute(Q.GET_BATCHES);
  return rows;
};



// GET BY ID
export const getBatchById = async (id) => {
  const [rows] = await pool.execute(Q.GET_BATCH_BY_ID, [id]);

  if (rows.length === 0) {
    throw new Error("Batch not found");
  }

  return rows[0];
};



// UPDATE
export const updateBatch = async (id, data) => {
  const {
    course_id,
    trainer_id,
    start_date,
    end_date,
    timing
  } = data;

  const [result] = await pool.execute(Q.UPDATE_BATCH, [
    course_id,
    trainer_id ?? null,
    start_date,
    end_date ?? null,
    timing ?? null,
    id
  ]);

  if (result.affectedRows === 0) {
    throw new Error("Batch not found or not updated");
  }

  return { message: "Updated successfully" };
};



// DELETE
export const deleteBatch = async (id) => {
  const [result] = await pool.execute(Q.DELETE_BATCH, [id]);

  if (result.affectedRows === 0) {
    throw new Error("Batch not found or not deleted");
  }

  return { message: "Deleted successfully" };
};