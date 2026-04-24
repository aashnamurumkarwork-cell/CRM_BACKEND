import pool from "../../config/config.db.js";
import * as Q from "./lead.queries.js";

// CREATE
export const createLead = async (data) => {
  const { name, phone, email, source, referred_by, assigned_to, status } = data;

  if (!name || !phone || !source) {
    throw new Error("name, phone, source required");
  }

  const [result] = await pool.execute(Q.CREATE_LEAD, [
    name,
    phone,
    email ?? null,
    source,
    referred_by ?? null,
    assigned_to ?? null,
    status ?? "new"
  ]);

  return { id: result.insertId };
};

// GET ALL
export const getLeads = async () => {
  const [rows] = await pool.execute(Q.GET_LEADS);
  return rows;
};

// GET BY ID
export const getLeadById = async (id) => {
  const [rows] = await pool.execute(Q.GET_LEAD_BY_ID, [id]);
  if (rows.length === 0) throw new Error("Lead not found");
  return rows[0];
};

// UPDATE
export const updateLead = async (id, data) => {
  const { name, phone, email, source, referred_by, assigned_to, status } = data;

  const [result] = await pool.execute(Q.UPDATE_LEAD, [
    name,
    phone,
    email ?? null,
    source,
    referred_by ?? null,
    assigned_to ?? null,
    status,
    id
  ]);

  if (result.affectedRows === 0) throw new Error("Lead not updated");

  return { message: "Updated successfully" };
};

// DELETE
export const deleteLead = async (id) => {
  const [result] = await pool.execute(Q.DELETE_LEAD, [id]);
  if (result.affectedRows === 0) throw new Error("Lead not deleted");

  return { message: "Deleted successfully" };
};