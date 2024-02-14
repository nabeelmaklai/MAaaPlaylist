const Song = require('../models/song')
const API_URL = 'https://api.deezer.com/search?q='
const API_TRACK_URL = 'https://api.deezer.com/track/'
const axios = require('axios')
const Playlist = require('../models/playlist')
const User = require('../models/user')

const show = async (req, res) => {
  try {
    console.log(req.body)
    let response
    if (req.body.artist === '') {
      response = await axios.get(API_URL + req.body.name)
    } else if (req.body.artist !== '' && req.body.name !== '') {
      response = await axios.get(
        `https://api.deezer.com/search?q=artist:"${req.body.artist}" track:"${req.body.name}"`
      )
    } else if (req.body.artist !== '' && req.body.name === '') {
      response = await axios.get(
        `https://api.deezer.com/search?q=artist:"${req.body.artist}"`
      )
    }
    res.render('songs/songresults', {
      title: 'Song Results',
      songs: response.data.data,
      songName: req.body.name,
      artistName: req.body.artist
    })
  } catch (error) {
    console.log(error)
  }
}

const details = async (req, res) => {
  const songdetails = await axios.get(API_TRACK_URL + req.params.id)
  if (req.user !== undefined) {
    const userID = req.user._id
    const currentUser = await User.findById(userID).populate('playlists')
    const playlist = currentUser.playlists
    res.render('songs/songdetails', {
      title: 'Details',
      songdetails: songdetails.data,
      playlist
    })
  } else {
    res.render('songs/songdetails', {
      title: 'Details',
      songdetails: songdetails.data
    })
  }
}

module.exports = {
  show,
  details
}
