import CharacterModel from './model';

export const saveNewCharacter = async character => {
  const newCharacter = new CharacterModel(character);
  try {
    const response = await newCharacter.save();
    return response;
  } catch (error) {
    throw error;
  }
};
