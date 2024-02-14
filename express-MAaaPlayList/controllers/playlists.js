const Playlists = require('../models/playlist')
const Song = require('../models/song')
const API_TRACK_URL = 'https://api.deezer.com/track/'
const axios = require('axios')
const User = require('../models/user')

const create = (req, res) => {
  res.redirect('/new')
}

const newPlayList = async (req, res) => {
  req.body.public = !!req.body.public
  try {
    const playlist = await Playlists.create(req.body)
    const userId = req.user._id
    const currentUser = await User.findById(userId)
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
    const userDetails = await User.findById(userID)

    res.render('../views/playlists/playlists', {
      title: 'playlists',
      allPlayLists: allPlayLists,
      userDetails
    })
  } catch (error) {
    res.redirect('/')
  }
}

const deletePlaylist = async (req, res) => {
  try {
    await Playlists.findOneAndDelete({ _id: req.params.id })
    await User.updateMany(
      { playlists: req.params.id },
      { $pull: { playlists: req.params.id } }
    )
  } catch (error) {
    console.log(error)
  }

  res.redirect('/new')
}
const showUpdate = async (req, res) => {
  let select
  try {
    select = await Playlists.findById(req.params.id)
  } catch (error) {
    console.log(error)
  }
  res.render('playlists/editplaylist', {
    title: 'Updating the playlist',
    select
  })
}

const updatePlaylist = async (req, res) => {
  req.body.public = !!req.body.public
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
    const updatedSongs = await Song.find({})
    updatedSongs.forEach(async (song) => {
      if (song.apiID === req.params.id) {
        const playlistID = req.body.addToPlaylist
        const playList = await Playlists.findById(playlistID)

        if (!playList.songs.some((s) => s._id.equals(song._id))) {
          playList.songs.push(song)
          await playList.save()
          res.redirect(`/view/${playList._id}`)
        }
      }
    })
  } catch (error) {
    console.log('error in adding song to playlist ' + error)
  }
}
const viewPlaylist = async (req, res) => {
  let selectView
  try {
    selectView = await Playlists.findOne({ _id: req.params.id })
  } catch (error) {
    console.log(error)
  }
  res.render('playlists/view', {
    title: 'View the Playlist',
    selectViewz
  })
}

const removeSong = async (req, res) => {
  try {
    const playlistId = req.params.id
    const songId = req.params.songId
    const playlist = await Playlists.findById(playlistId)
    playlist.songs = playlist.songs.filter((song) => song.toString() !== songId)
    await playlist.save()
    res.redirect(`/view/${playlistId}`)
  } catch (error) {
    console.log(error)
  }
}
const songsDetails = async (req, res) => {
  try {
    const playlist = await Playlists.findById(req.params.id).populate('songs')
    console.log(playlist)
    res.render('playlists/view', {
      selectView: playlist,
      title: 'View the Playlist'
    })
  } catch (error) {
    console.log(error)
  }
}
const publicPlaylistIndex = async (req, res) => {
  try {
    const publicPlaylists = await Playlists.find({ public: true }).populate(
      'songs'
    )
    res.render('../views/playlists/publicPlaylists', {
      title: 'Public Playlists',
      publicPlaylists
    })
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  create,
  newPlayList,
  playlistIndex,
  deletePlaylist,
  showUpdate,
  updatePlaylist,
  addToPlaylist,
  viewPlaylist,
  removeSong,
  publicPlaylistIndex,
  songsDetails
}
