const express = require("express");
const router = express.Router();
const {
  getMockingUsers,
  generateData,
} = require("../controllers/mocks.controllers");

// Endpoint para generar y retornar usuarios simulados
router.get("/mockingusers", getMockingUsers);

// Endpoint para generar datos y guardarlos en la base de datos
router.post("/generateData", generateData);

module.exports = router;
