import express from 'express';
import cors from 'cors';
import db from './app/models/index.js';
import authRoutes from './app/routes/auth.routes.js';
import userRoutes from './app/routes/user.routes.js';

const app = express();

const corsOptions = {
    origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a node.js Jwt autenticación.' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos sincronizada.');
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}.`);
    });
});