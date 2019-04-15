import express from 'express';
import cors from 'cors';
import charactersRouter from '../characters/routes';
import { notFoundErrorHandler, defaultErrorHandler } from '../utils/errorHandler';

export default app => {
  app.use(express.json());
  app.use(cors());
  app.use('/characters', charactersRouter);
  app.use(notFoundErrorHandler);
  app.use(defaultErrorHandler);
};
