import pool from "../../../config/config.db.js";
import * as Q from "./installmant.queries.js";

// CREATE
export const createInstallment = async (data) => {
  const { admission_id, due_date, amount } = data;

  if (!admission_id) throw new Error("Admission ID required");
  if (!due_date) throw new Error("Due date required");
  if (!amount) throw new Error("Amount required");

  const [result] = await pool.execute(Q.CREATE_INSTALLMENT, [
    admission_id,
    due_date,
    amount
  ]);

  return { id: result.insertId };
};

// GET ALL
export const getInstallments = async () => {
  const [rows] = await pool.execute(Q.GET_ALL_INSTALLMENTS);
  return rows;
};

// GET BY ID
export const getInstallmentById = async (id) => {
  const [rows] = await pool.execute(Q.GET_INSTALLMENT_BY_ID, [id]);

  if (rows.length === 0) throw new Error("Installment not found");

  return rows[0];
};

// GET BY ADMISSION
export const getInstallmentsByAdmission = async (admission_id) => {
  const [rows] = await pool.execute(Q.GET_INSTALLMENTS_BY_ADMISSION, [admission_id]);
  return rows;
};

// UPDATE
export const updateInstallment = async (id, data) => {
  const { admission_id, due_date, amount } = data;

  const [result] = await pool.execute(Q.UPDATE_INSTALLMENT, [
    admission_id,
    due_date,
    amount,
    id
  ]);

  if (result.affectedRows === 0) {
    throw new Error("Installment not updated");
  }

  return { message: "Installment updated" };
};

// DELETE
export const deleteInstallment = async (id) => {
  const [result] = await pool.execute(Q.DELETE_INSTALLMENT, [id]);

  if (result.affectedRows === 0) {
    throw new Error("Installment not deleted");
  }

  return { message: "Installment deleted" };
};