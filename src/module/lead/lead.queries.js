// CREATE
export const CREATE_LEAD = `
INSERT INTO leads 
(name, phone, email, source, referred_by, assigned_to, status)
VALUES (?, ?, ?, ?, ?, ?, ?)
`;

// GET ALL
export const GET_LEADS = `SELECT * FROM leads`;

// GET BY ID
export const GET_LEAD_BY_ID = `
SELECT * FROM leads WHERE id = ?
`;

// UPDATE
export const UPDATE_LEAD = `
UPDATE leads SET
name = ?, phone = ?, email = ?, source = ?, 
referred_by = ?, assigned_to = ?, status = ?
WHERE id = ?
`;

// DELETE
export const DELETE_LEAD = `
DELETE FROM leads WHERE id = ?
`;