import express from 'express';
import cors from 'cors';

const app = express();

// Middleware para permitir CORS desde el frontend
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // solo si vas a usar cookies/autenticación, si no, puedes quitarlo
}));

// Middleware para manejar JSON (útil si tu frontend envía datos en POST, etc.)
app.use(express.json());

// Ruta GET para /users
app.get('/users', (req, res) => {
  res.json({ users: [] });
});

// Ruta raíz opcional (evita el 404 en /)
app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

// Inicializar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
