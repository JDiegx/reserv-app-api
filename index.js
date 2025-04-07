const express = require("express");
const cors = require("cors");
const reservasRoutes = require("./routes/reservasRoutes");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/", reservasRoutes);
app.listen(PORT, () => {console.log(`✅ API de reservas corriendo en http://localhost:${PORT}`);});
