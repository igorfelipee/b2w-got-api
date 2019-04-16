import { Router } from 'express';
import {
  createCharacter,
  getCharacter,
  deleteCharacter,
  getCharacters,
  putCharacter
} from './service';

const routes = new Router();

routes
  .get('/', getCharacters)
  .post('/', createCharacter)
  .get('/:characterId', getCharacter)
  .delete('/:characterId', deleteCharacter)
  .put('/:characterId', putCharacter);

export default routes;
