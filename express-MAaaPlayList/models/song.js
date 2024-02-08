const mongoose = require('mongoose')
const Schema = mongoose.Schema
const songSchema = new Schema(
  {
    name: { type: String, required: true },
    genre: [{ type: String, required: true }],
    artist: [{ type: String, required: true }],
    releaseYear: { type: Number, required: true },
    cover: { type: String, required: true }
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('Song', songSchema)
