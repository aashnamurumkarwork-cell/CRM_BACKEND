import pool from "../../../config/config.db.js";
import * as Q from "./paymant.queries.js";

// CREATE
export const createPayment = async (data) => {
  const { admission_id, amount, payment_mode } = data;

  if (!admission_id) throw new Error("Admission ID required");
  if (!amount) throw new Error("Amount required");

  const [result] = await pool.execute(Q.CREATE_PAYMENT, [
    admission_id,
    amount,
    payment_mode
  ]);

  return { id: result.insertId };
};

// GET ALL
export const getPayments = async () => {
  const [rows] = await pool.execute(Q.GET_ALL_PAYMENTS);
  return rows;
};

// GET BY ID
export const getPaymentById = async (id) => {
  const [rows] = await pool.execute(Q.GET_PAYMENT_BY_ID, [id]);

  if (rows.length === 0) throw new Error("Payment not found");

  return rows[0];
};

// GET BY ADMISSION
export const getPaymentsByAdmission = async (admission_id) => {
  const [rows] = await pool.execute(Q.GET_PAYMENTS_BY_ADMISSION, [admission_id]);
  return rows;
};

// DELETE
export const deletePayment = async (id) => {
  const [result] = await pool.execute(Q.DELETE_PAYMENT, [id]);

  if (result.affectedRows === 0) {
    throw new Error("Payment not deleted");
  }

  return { message: "Payment deleted" };
};