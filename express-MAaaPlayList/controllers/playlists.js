const Playlists = require('../models/playlist')
const Song = require('../models/song')

const create = (req, res) => {
  // res.render('../views/playlists/playlists', { title: 'playlists' })
  res.redirect('/new')
}

const newPlayList = async (req, res) => {
  try {
    await Playlists.create(req.body)
  } catch (error) {
    console.log('Error in playlist creation')
  }
  res.redirect('/new')
}

const playlistIndex = async (req, res) => {
  const allPlayLists = await Playlists.find({})
  console.log(allPlayLists)

  res.render('../views/playlists/playlists', {
    title: 'playlists',
    allPlayLists: allPlayLists
  })
}

const addToPlaylist = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id)
    const playlistID = req.body.addToPlaylist
    const playList = await Playlists.findById(playlistID)
    playList.songs.push(song)
    console.log(playList.songs)
    await playList.save()
  } catch (error) {
    console.log('error in adding song to playlist')
  }
}

module.exports = {
  create,
  newPlayList,
  playlistIndex,
  addToPlaylist
}
