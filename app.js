import express from 'express';

const app = express();

app.get('/api/estagio-bit', (req, res) => {
  res.status(200).send('Com esse pequeno código temos uma API funcional');
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
