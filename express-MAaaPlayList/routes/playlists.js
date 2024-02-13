const express = require('express')
const router = express.Router()
const playlistsCtrl = require('../controllers/playlists')

router.get('/playlists', playlistsCtrl.create)
router.post('/new', playlistsCtrl.newPlayList)
router.get('/new', playlistsCtrl.playlistIndex)

router.delete('/:id', playlistsCtrl.deletePlaylist)
router.post('/:id', playlistsCtrl.showUpdate)
router.put('/:id', playlistsCtrl.updatePlaylist)
router.get('/view/:id', playlistsCtrl.viewPlaylist)
router.delete('/playlists/:id/:songId', playlistsCtrl.removeSong)
router.post('/songs/:id/addToPlayList', playlistsCtrl.addToPlaylist)
module.exports = router
