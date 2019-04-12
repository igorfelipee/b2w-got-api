import { Schema, model } from 'mongoose';

const characterSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, default: '' },
  culture: { type: String, default: '' },
  aliases: [{ type: String, default: [] }],
  died: { type: String, default: '' }
});

const CharacterModel = model('Character', characterSchema);

export default CharacterModel;
