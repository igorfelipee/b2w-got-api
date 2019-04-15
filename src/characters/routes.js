import { Router } from 'express';
import { createCharacter, getCharacter } from './service';

const routes = new Router();

routes
  .get('/', (req, res) => res.send('Endpoint de personagens'))
  .post('/', createCharacter)
  .get('/:characterId', getCharacter);

export default routes;
