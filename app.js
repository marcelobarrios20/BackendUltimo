require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const mocksRouter = require('./routes/mocks.router');

const app = express();
app.use(express.json());
app.use('/api/mocks', mocksRouter);

// Conectar a la base de datos
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
