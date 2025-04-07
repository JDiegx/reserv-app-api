const express = require("express");
const {crearReserva,obtenerDisponibilidad,} = require("../controllers/reservasController");

const router = express.Router();

router.post("/reservar", crearReserva);
router.get("/disponibilidad/:zona/:dia", obtenerDisponibilidad);

module.exports = router;
