const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    avatar: {
      type: String
    },
    googleId: {
      type: String,
      required: true
    },
    playlists: [{ type: Schema.Types.ObjectId, ref: 'Playlist' }]
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('User', userSchema)
