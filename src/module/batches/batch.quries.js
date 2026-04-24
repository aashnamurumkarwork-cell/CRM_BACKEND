export const CREATE_BATCH = `
INSERT INTO batches 
(course_id, trainer_id, start_date, end_date, timing)
VALUES (?, ?, ?, ?, ?)
`;

export const GET_BATCHES = `
SELECT 
  b.*,
  c.name AS course_name
FROM batches b
JOIN courses c ON c.id = b.course_id
ORDER BY b.id DESC
`;

export const GET_BATCH_BY_ID = `
SELECT 
  b.*,
  c.name AS course_name
FROM batches b
JOIN courses c ON c.id = b.course_id
WHERE b.id = ?
`;

// UPDATE
export const UPDATE_BATCH = `
UPDATE batches SET
course_id = ?,
trainer_id = ?,
start_date = ?,
end_date = ?,
timing = ?
WHERE id = ?
`;


export const DELETE_BATCH = `
DELETE FROM batches WHERE id = ?
`;