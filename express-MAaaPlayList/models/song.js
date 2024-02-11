const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema(
  {
    apiID: { type: String, required: true },
    title: { type: String, required: true },
    duration: { type: Number, required: true },
    artist: { type: String, required: true },
    releaseDate: { type: String, required: true },
    cover: { type: String, required: true },
    songPreview: { type: String, required: true },
    explicitLyric: { type: Boolean, required: true }
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('Song', songSchema)
