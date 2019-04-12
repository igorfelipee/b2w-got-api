import { saveNewCharacter } from './repository';

export const createCharacter = (req, res) => {
  const character = req.body;
  saveNewCharacter(character)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
};
