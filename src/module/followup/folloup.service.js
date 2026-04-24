import pool from "../../config/config.db.js";
import * as Q from "./folloup.queris.js";

// CREATE FOLLOWUP
export const createFollowup = async (data) => {
  const { lead_id, followup_date } = data;

  if (!lead_id || !followup_date) {
    throw new Error("lead_id and followup_date required");
  }

  const [result] = await pool.execute(Q.CREATE_FOLLOWUP, [
    lead_id,
    followup_date
  ]);

  return { id: result.insertId };
};


// GET ALL
export const getFollowups = async () => {
  const [rows] = await pool.execute(Q.GET_FOLLOWUPS);
  return rows;
};


// GET BY LEAD
export const getFollowupsByLead = async (lead_id) => {
  const [rows] = await pool.execute(Q.GET_BY_LEAD, [lead_id]);
  return rows;
};


// GET BY ID
export const getFollowupById = async (id) => {
  const [rows] = await pool.execute(Q.GET_BY_ID, [id]);
  if (rows.length === 0) throw new Error("Not found");
  return rows[0];
};


// UPDATE
export const updateFollowup = async (id, data) => {
  const { lead_id, followup_date } = data;

  const [result] = await pool.execute(Q.UPDATE_FOLLOWUP, [
    lead_id,
    followup_date,
    id
  ]);

  if (result.affectedRows === 0) throw new Error("Not updated");

  return { message: "Updated successfully" };
};


// DELETE
export const deleteFollowup = async (id) => {
  const [result] = await pool.execute(Q.DELETE_FOLLOWUP, [id]);
  if (result.affectedRows === 0) throw new Error("Not deleted");

  return { message: "Deleted successfully" };
};


// 🔥 LOGS

// ADD LOG
export const addLog = async (data) => {
  const { followup_id, conversation } = data;

  if (!followup_id || !conversation) {
    throw new Error("followup_id and conversation required");
  }

  const [result] = await pool.execute(Q.CREATE_LOG, [
    followup_id,
    conversation
  ]);

  return { id: result.insertId };
};


// GET LOGS
export const getLogs = async (followup_id) => {
  const [rows] = await pool.execute(Q.GET_LOGS, [followup_id]);
  return rows;
};


// DELETE LOG
export const deleteLog = async (id) => {
  const [result] = await pool.execute(Q.DELETE_LOG, [id]);
  if (result.affectedRows === 0) throw new Error("Log not deleted");

  return { message: "Log deleted successfully" };
};