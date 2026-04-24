import * as service from "./payment.service.js";

// CREATE
export const createPayment = async (req, res) => {
  try {
    const result = await service.createPayment(req.body);

    return res.status(201).json({
      success: true,
      message: "Payment created successfully",
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
export const getPayments = async (req, res) => {
  try {
    const data = await service.getPayments();

    return res.status(200).json({
      success: true,
      message: "Payments fetched successfully",
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
export const getPaymentById = async (req, res) => {
  try {
    const data = await service.getPaymentById(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Payment fetched successfully",
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
export const getPaymentsByAdmission = async (req, res) => {
  try {
    const data = await service.getPaymentsByAdmission(req.params.admission_id);

    return res.status(200).json({
      success: true,
      message: "Payments fetched by admission",
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
export const updatePayment = async (req, res) => {
  try {
    const result = await service.updatePayment(req.params.id, req.body);

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
export const deletePayment = async (req, res) => {
  try {
    const result = await service.deletePayment(req.params.id);

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