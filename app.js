import express from 'express';
import setMiddlewares from './src/middlewares';
import connectToDatabase from './src/database';

const app = express();
setMiddlewares(app);
connectToDatabase();

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
