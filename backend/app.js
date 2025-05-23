const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const sequelize = require('./sequelize');
const routes = require('./routes/index');
const cors = require("cors");

// Cargar variables de entorno
dotenv.config();

// Inicializar Express
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Ruta base
app.get('/', (req, res) => {
    res.send('API de mi-tiendita-online funcionando.');
});

// Rutas de la API
app.use('/api', routes);

// Conexión a la base de datos
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos exitosa.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
})();

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
