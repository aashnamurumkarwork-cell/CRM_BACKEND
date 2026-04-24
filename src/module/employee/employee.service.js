import pool from "../../config/config.db.js";
import { queries } from "./employee.quaries.js";


// CREATE
export const createEmployee = async (data) => {
  const { name, role, reporting_to } = data;

  const [result] = await pool.query(
    queries.create,
    [name, role, reporting_to]
  );

  return result;
};

// GET ALL
export const getEmployees = async () => {
  const [rows] = await pool.query(queries.getAll);
  return rows;
};

// GET BY ID
export const getEmployeeById = async (id) => {
  const [rows] = await pool.query(queries.getById, [id]);
  return rows[0];
};

// UPDATE
export const updateEmployee = async (id, data) => {
  const { name, role, reporting_to } = data;

  const [result] = await pool.query(
    queries.update,
    [name, role, reporting_to, id]
  );

  return result;
};

// DELETE
export const deleteEmployee = async (id) => {
  const [result] = await pool.query(queries.delete, [id]);
  return result;
};