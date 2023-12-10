import { Schema, model, models } from 'mongoose'

const GameSchema = new Schema({
  _id: { type: String },
  key: { type: Array },
  name: { type: Array },
  versions: [{ _id: false, key: String, name: String }]
})

const Games = models.Games || model('Games', GameSchema)

export default Games
