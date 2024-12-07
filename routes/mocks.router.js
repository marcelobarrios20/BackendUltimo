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

/**
 * @swagger
 * /api/mocks/mockingusers:
 *   get:
 *     summary: Obtiene usuarios simulados
 *     responses:
 *       200:
 *         description: Lista de usuarios generados.
 */

/**
 * @swagger
 * /api/mocks/generateData:
 *   post:
 *     summary: Genera datos y los inserta en la base de datos.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               users:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       201:
 *         description: Datos generados correctamente.
 */
