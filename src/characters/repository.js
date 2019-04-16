import CharacterModel from './model';

export const saveNewCharacter = character => {
  const newCharacter = new CharacterModel(character);
  return newCharacter.save();
};

export const getCharacterById = characterId => CharacterModel.findById(characterId);

export const deleteCharacterById = characterId => CharacterModel.findByIdAndDelete(characterId);

export const getAllCharacters = params => CharacterModel.find(params);

export const findByCharacterIdAndUpdate = (characterId, character) =>
  CharacterModel.updateOne({ _id: characterId }, character);
