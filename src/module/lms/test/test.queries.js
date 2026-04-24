export const CREATE_TEST = `
INSERT INTO tests (subject_id, title)
VALUES (?, ?)
`;

export const GET_ALL_TESTS = `
SELECT * FROM tests ORDER BY id DESC
`;

export const GET_TEST_BY_ID = `
SELECT * FROM tests WHERE id = ?
`;

export const GET_TESTS_BY_SUBJECT = `
SELECT * FROM tests WHERE subject_id = ?
`;

export const UPDATE_TEST = `
UPDATE tests 
SET subject_id = ?, title = ?
WHERE id = ?
`;

export const DELETE_TEST = `
DELETE FROM tests WHERE id = ?
`;