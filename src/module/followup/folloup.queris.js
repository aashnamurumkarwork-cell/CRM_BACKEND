// FOLLOWUP
export const CREATE_FOLLOWUP = `
INSERT INTO followups (lead_id, followup_date)
VALUES (?, ?)
`;

export const GET_FOLLOWUPS = `SELECT * FROM followups`;


export const GET_BY_ID = `
SELECT * FROM followups WHERE id = ?
`;


export const GET_BY_LEAD = `
SELECT * FROM followups WHERE lead_id = ?
`;

export const UPDATE_FOLLOWUP = `
UPDATE followups SET
lead_id = ?, followup_date = ?
WHERE id = ?
`;

export const DELETE_FOLLOWUP = `
DELETE FROM followups WHERE id = ?
`;


// LOGS
export const CREATE_LOG = `
INSERT INTO followup_logs (followup_id, conversation)
VALUES (?, ?)
`;

export const GET_LOGS = `
SELECT * FROM followup_logs WHERE followup_id = ?
`;

export const DELETE_LOG = `
DELETE FROM followup_logs WHERE id = ?
`;