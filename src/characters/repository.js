import CharacterModel from './model';

export const saveNewCharacter = character => {
  const newCharacter = new CharacterModel(character);
  return newCharacter.save();
};

export const getCharacterById = characterId => CharacterModel.findById(characterId);
