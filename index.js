const express = require('express');
const cors = require('cors'); // Importa o middleware CORS
const app = express();
const port = 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:5173' // Permite apenas essa origem, ajuste conforme necessário
}));

// Rotas da API
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
