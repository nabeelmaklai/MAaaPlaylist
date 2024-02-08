const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlistSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Playlist', playlistSchema)
