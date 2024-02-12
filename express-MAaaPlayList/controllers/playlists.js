const Playlists = require('../models/playlist')
const Song = require('../models/song')
const API_TRACK_URL = 'https://api.deezer.com/track/'
const axios = require('axios')
const User = require('../models/user')

const create = (req, res) => {
  // res.render('../views/playlists/playlists', { title: 'playlists' })
  res.redirect('/new')
}

const newPlayList = async (req, res) => {
  try {
    const playlist = await Playlists.create(req.body)
    const userId = req.user._id
    const currentUser = await User.findById(userId)
    console.log('This is the current user', currentUser)
    currentUser.playlists.push(playlist._id)
    await currentUser.save()
  } catch (error) {
    console.log('Error in playlist creation')
  }
  res.redirect('/new')
}

const playlistIndex = async (req, res) => {
  try {
    const userID = req.user._id
    const currentUser = await User.findById(userID).populate('playlists')
    const allPlayLists = await currentUser.playlists

    res.render('../views/playlists/playlists', {
      title: 'playlists',
      allPlayLists: allPlayLists
    })
  } catch (error) {}
}

const deletePlaylist = async (req, res) => {
  try {
    await Playlists.findOneAndDelete({ _id: req.params.id })
  } catch (error) {
    console.log(error)
  }

  res.redirect('/new')
}
const showUpdate = async (req, res) => {
  let select
  try {
    select = await Playlists.findOne({ _id: req.params.id })
  } catch (error) {
    console.log(error)
  }
  res.render('playlists/editplaylist', {
    title: 'Updating the playlist',
    select
  })
}
const updatePlaylist = async (req, res) => {
  try {
    await Playlists.findOneAndUpdate({ _id: req.params.id }, req.body)
  } catch (error) {
    console.log(error)
  }
  res.redirect('/new')
}

const addToPlaylist = async (req, res) => {
  try {
    const songdetails = await axios.get(API_TRACK_URL + req.params.id)
    const songToAdd = {
      apiID: songdetails.data.id,
      title: songdetails.data.title,
      duration: songdetails.data.duration,
      artist: songdetails.data.artist.name,
      releaseDate: songdetails.data.release_date,
      cover: songdetails.data.album.cover_xl,
      songPreview: songdetails.data.preview,
      explicitLyric: songdetails.data.explicit_lyrics
    }
    const AllSongs = await Song.find({})
    let songExists = false
    AllSongs.forEach(async (song) => {
      if (song.apiID === req.params.id) {
        songExists = true
      }
    })
    if (songExists === false) {
      await Song.create(songToAdd)
    }
    AllSongs.forEach(async (song) => {
      if (song.apiID === req.params.id) {
        const playlistID = req.body.addToPlaylist
        const playList = await Playlists.findById(playlistID)

        if (!playList.songs.some((s) => s._id.equals(song._id))) {
          playList.songs.push(song)

          await playList.save()
        }
      }
    })
  } catch (error) {
    console.log('error in adding song to playlist ' + error)
  }
}

module.exports = {
  create,
  newPlayList,
  playlistIndex,
  deletePlaylist,
  showUpdate,
  updatePlaylist,
  addToPlaylist
}
