const Song = require('../models/song')
const Playlist = require('../models/playlist')

const show = async (req, res) => {
  try {
    const songs = await Song.find({
      name: { $regex: req.body.name, $options: 'i' }
    })
    if (songs.length === 0) {
      res.send('No songs found')
    } else {
      res.render('songs/songresults', {
        title: 'Results',
        songs,
        searchQuery: req.body.name
      })
    }
  } catch (error) {
    console.log(error)
  }
}

const details = async (req, res) => {
  const songdetails = await Song.findById(req.params.id)
  const playlist = await Playlist.find({})
  console.log(playlist)
  res.render('songs/songdetails', { title: 'Details', songdetails, playlist })
}

module.exports = {
  show,
  details
}
