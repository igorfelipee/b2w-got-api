import { saveNewCharacter, getCharacterById } from './repository';
import ERROR from '../constants/error';

export const getCharacter = async (req, res, next) => {
  try {
    const { characterId } = req.params;
    const response = await getCharacterById(characterId);
    if (!response) {
      throw ERROR.CharacterNotFound;
    }
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

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
