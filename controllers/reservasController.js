const { leerReservas, guardarReservas } = require("../utils/fileManager");

const crearReserva = (req, res) => {
    const { zona, dia, hora, nombre, contacto, email } = req.body;
    if (!zona || !dia || !hora || !nombre || !contacto || !email) {
        return res.status(400).json({ mensaje: "Faltan datos para la reserva" });
    }
    const reservas = leerReservas();
    const yaReservado = reservas.some(
        (r) => r.zona === zona && r.dia === dia && r.hora === hora
    );
    if (yaReservado) {
        return res.status(409).json({ mensaje: "Horario ya reservado" });
    }
    const nuevaReserva = {
        id: Date.now().toString(),
        zona,
        dia,
        hora,
        nombre,
        contacto,
        email,
    };
    reservas.push(nuevaReserva);
    guardarReservas(reservas);
    res.status(201).json({ mensaje: "Reserva realizada", reserva: nuevaReserva });
};

const obtenerDisponibilidad = (req, res) => {
    const { zona, dia } = req.params;
    const reservas = leerReservas().filter(
        (r) => r.zona === zona && r.dia === dia
    );
    const horariosReservados = reservas.map((r) => r.hora);
    res.json({ dia, zona, ocupados: horariosReservados });
};

module.exports = {crearReserva,obtenerDisponibilidad,};
