import * as service from "./employee.service.js";

// CREATE
export const createEmployee = async (req, res) => {
  try {
    const result = await service.createEmployee(req.body);

    return res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error creating employee",
      error: err.message
    });
  }
};

// GET ALL
export const getEmployees = async (req, res) => {
  try {
    const data = await service.getEmployees();

    return res.status(200).json({
      success: true,
      message: "Employees fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching employees",
      error: err.message
    });
  }
};

// GET BY ID
export const getEmployeeById = async (req, res) => {
  try {
    const data = await service.getEmployeeById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Employee fetched successfully",
      data: data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error fetching employee",
      error: err.message
    });
  }
};

// UPDATE
export const updateEmployee = async (req, res) => {
  try {
    const result = await service.updateEmployee(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error updating employee",
      error: err.message
    });
  }
};

// DELETE
export const deleteEmployee = async (req, res) => {
  try {
    const result = await service.deleteEmployee(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
      data: result
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error deleting employee",
      error: err.message
    });
  }
};