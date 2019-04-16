import {
  saveNewCharacter,
  getCharacterById,
  deleteCharacterById,
  getAllCharacters,
  findByCharacterIdAndUpdate
} from './repository';
import ERROR from '../constants/error';
import axios from 'axios';
import configs from '../config';
const { apiOfFireAndIceUrl } = configs;

const characterIsDead = async characterName => {
  try {
    const response = await axios.get(
      encodeURI(`${apiOfFireAndIceUrl}/characters?name=${characterName}`)
    );
    const hasDied = response.data[0].died;
    return hasDied ? true : false;
  } catch (error) {
    return false;
  }
};

export const getCharacter = async (req, res, next) => {
  try {
    const { characterId } = req.params;
    const response = await getCharacterById(characterId);
    if (!response) {
      throw ERROR.CharacterNotFound;
    }
    const died = await characterIsDead(response.name);
    res.status(200).send({ response, died });
  } catch (error) {
    next(error);
  }
};

export const deleteCharacter = async (req, res, next) => {
  try {
    const { characterId } = req.params;
    if (!characterId) {
      throw ERROR.BadRequest;
    }
    const response = await deleteCharacterById(characterId);
    if (!response) {
      throw ERROR.CharacterNotFound;
    }
    res.status(204).send(response);
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

export const getCharacters = async (req, res, next) => {
  try {
    const { query } = req;
    const response = await getAllCharacters(query);
    const characterList = await response.map(character => {
      character.died = characterIsDead(character.name);
      return character;
    });
    console.log(characterList);
    res.status(200).send(characterList);
  } catch (error) {
    next(error);
  }
};

export const putCharacter = async (req, res, next) => {
  try {
    const { characterId } = req.params;
    const bodyCharacter = req.body;
    const response = await findByCharacterIdAndUpdate(characterId, bodyCharacter);
    if (response.nModified === 0) throw ERROR.CharacterNotFound;
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
