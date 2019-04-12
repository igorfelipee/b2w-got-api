import express from 'express';
import cors from 'cors';
import charactersRouter from '../characters/routes';

export default app => {
  app.use(express.json());
  app.use(cors());
  app.use('/characters', charactersRouter);
};
