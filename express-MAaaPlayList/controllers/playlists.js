const Playlists = require('../models/playlist')

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

module.exports = {
  create,
  newPlayList,
  playlistIndex
}
