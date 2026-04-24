

export const queries = {
  create: "INSERT INTO employees (name, role, reporting_to) VALUES (?, ?, ?)",
  getAll: "SELECT * FROM employees",
  getById: "SELECT * FROM employees WHERE id = ?",
  update: "UPDATE employees SET name=?, role=?, reporting_to=? WHERE id=?",
  delete: "DELETE FROM employees WHERE id=?"
};

