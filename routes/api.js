const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', (req, res) => {
  res.json({ message: 'Servidor está online!' });
});

router.get('/bayer', async (req, res) => {
    try {
      const result = await db.query('SELECT * from drivers_bayer'); 
      res.status(201).json({ message: result }); 
    } catch (err) {
      console.error('Erro ao consultar o banco de dados', err);
      res.status(500).json({ error: 'Erro ao consultar o banco de dados' });
    }
  });
  

module.exports = router;
