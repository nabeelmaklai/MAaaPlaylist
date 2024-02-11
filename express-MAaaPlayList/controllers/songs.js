const Song = require('../models/song')
const API_URL = 'https://api.deezer.com/search?q='
const API_TRACK_URL = 'https://api.deezer.com/track/'
const axios = require('axios')
const Playlist = require('../models/playlist')

const show = async (req, res) => {
  try {
    const response = await axios.get(API_URL + req.body.name)
    res.render('songs/songresults', {
      title: 'Song Results',
      songs: response.data.data,
      searchQuery: req.body.name
    })
  } catch (error) {
    console.log(error)
  }
}

const details = async (req, res) => {
  const songdetails = await axios.get(API_TRACK_URL + req.params.id)
  const playlist = await Playlist.find({})
  res.render('songs/songdetails', {
    title: 'Details',
    songdetails: songdetails.data,
    playlist
  })
}

module.exports = {
  show,
  details
}
