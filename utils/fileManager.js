const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(__dirname, "..", "data", "reservations.json");

const leerReservas = () => {
    if (!fs.existsSync(DATA_PATH)) return [];
    const contenido = fs.readFileSync(DATA_PATH, "utf-8");
    if (!contenido) return [];
    return JSON.parse(contenido);
};

const guardarReservas = (reservas) => {
    fs.writeFileSync(DATA_PATH, JSON.stringify(reservas, null, 2));
};

module.exports = { leerReservas, guardarReservas };
