const express = require('express')
const router = express.Router()
const playlistsCtrl = require('../controllers/playlists')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/playlists', ensureLoggedIn, playlistsCtrl.create)
router.post('/new', ensureLoggedIn, playlistsCtrl.newPlayList)
router.get('/new', ensureLoggedIn, playlistsCtrl.playlistIndex)
router.get('/playlists/publicPlaylists', playlistsCtrl.publicPlaylistIndex)
router.post('/view/:id', ensureLoggedIn, playlistsCtrl.songsDetails)
router.get('/view/:id', ensureLoggedIn, playlistsCtrl.songsDetails)
router.delete('/:id', ensureLoggedIn, playlistsCtrl.deletePlaylist)
router.post('/:id', ensureLoggedIn, playlistsCtrl.showUpdate)
router.put('/:id', ensureLoggedIn, playlistsCtrl.updatePlaylist)
router.post('/view/:id', ensureLoggedIn, playlistsCtrl.viewPlaylist)
router.get('/view/:id', ensureLoggedIn, playlistsCtrl.viewPlaylist)
router.delete('/:id/:songId', ensureLoggedIn, playlistsCtrl.removeSong)
router.post(
  '/songs/:id/addToPlayList',
  ensureLoggedIn,
  playlistsCtrl.addToPlaylist
)
module.exports = router
