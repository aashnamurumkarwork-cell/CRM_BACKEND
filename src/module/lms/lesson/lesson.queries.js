export const CREATE_LESSON = `
INSERT INTO lessons (subject_id, title)
VALUES (?, ?)
`;

export const GET_ALL_LESSONS = `
SELECT * FROM lessons ORDER BY id DESC
`;

export const GET_LESSON_BY_ID = `
SELECT * FROM lessons WHERE id = ?
`;

export const GET_LESSONS_BY_SUBJECT = `
SELECT * FROM lessons WHERE subject_id = ?
`;

export const UPDATE_LESSON = `
UPDATE lessons 
SET subject_id = ?, title = ?
WHERE id = ?
`;

export const DELETE_LESSON = `
DELETE FROM lessons WHERE id = ?
`;