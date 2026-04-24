export const CREATE_PAYMENT = `
INSERT INTO payments (admission_id, amount, payment_mode)
VALUES (?, ?, ?)
`;

export const GET_ALL_PAYMENTS = `
SELECT * FROM payments ORDER BY id DESC
`;

export const GET_PAYMENT_BY_ID = `
SELECT * FROM payments WHERE id = ?
`;

export const GET_PAYMENTS_BY_ADMISSION = `
SELECT * FROM payments WHERE admission_id = ?
`;

export const DELETE_PAYMENT = `
DELETE FROM payments WHERE id = ?
`;