export const CREATE_INSTALLMENT = `
INSERT INTO fee_installments (admission_id, due_date, amount)
VALUES (?, ?, ?)
`;

export const GET_ALL_INSTALLMENTS = `
SELECT * FROM fee_installments ORDER BY id DESC
`;

export const GET_INSTALLMENT_BY_ID = `
SELECT * FROM fee_installments WHERE id = ?
`;

export const GET_INSTALLMENTS_BY_ADMISSION = `
SELECT * FROM fee_installments WHERE admission_id = ?
`;

export const UPDATE_INSTALLMENT = `
UPDATE fee_installments 
SET admission_id = ?, due_date = ?, amount = ?
WHERE id = ?
`;

export const DELETE_INSTALLMENT = `
DELETE FROM fee_installments WHERE id = ?
`;