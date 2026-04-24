import * as service from "./installmant.service.js";

// CREATE
export const createInstallment = async (req, res) => {
  try {
    const result = await service.createInstallment(req.body);

    return res.status(201).json({
      success: true,
      message: "Installment created successfully",
      data: result
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// GET ALL
export const getInstallments = async (req, res) => {
  try {
    const data = await service.getInstallments();

    return res.status(200).json({
      success: true,
      message: "Installments fetched successfully",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// GET BY ID
export const getInstallmentById = async (req, res) => {
  try {
    const data = await service.getInstallmentById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Installment fetched successfully",
      data
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message
    });
  }
};

// GET BY ADMISSION
export const getInstallmentsByAdmission = async (req, res) => {
  try {
    const data = await service.getInstallmentsByAdmission(req.params.admission_id);

    return res.status(200).json({
      success: true,
      message: "Installments fetched by admission",
      data
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// UPDATE
export const updateInstallment = async (req, res) => {
  try {
    const result = await service.updateInstallment(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// DELETE
export const deleteInstallment = async (req, res) => {
  try {
    const result = await service.deleteInstallment(req.params.id);

    return res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message
    });
  }
};