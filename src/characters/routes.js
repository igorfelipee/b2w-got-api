import { Router } from 'express';
import { createCharacter } from './service';

const routes = new Router();

routes.get('/', (req, res) => res.send('Endpoint de personagens')).post('/', createCharacter);

export default routes;
