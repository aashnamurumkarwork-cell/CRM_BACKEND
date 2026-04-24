export const CREATE_SUBJECT = `
INSERT INTO subjects (course_id, name)
VALUES (?, ?)
`;

export const GET_ALL_SUBJECTS = `
SELECT * FROM subjects ORDER BY id DESC
`;

export const GET_SUBJECT_BY_ID = `
SELECT * FROM subjects WHERE id = ?
`;

export const GET_SUBJECTS_BY_COURSE = `
SELECT * FROM subjects WHERE course_id = ?
`;

export const UPDATE_SUBJECT = `
UPDATE subjects 
SET course_id = ?, name = ?
WHERE id = ?
`;

export const DELETE_SUBJECT = `
DELETE FROM subjects WHERE id = ?
`;