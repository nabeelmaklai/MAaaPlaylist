const express = require('express')
const router = express.Router()
const songCtrl = require('../controllers/songs')

router.post('/songdetails', songCtrl.show)

module.exports = router
