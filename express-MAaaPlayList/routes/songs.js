const express = require('express')
const router = express.Router()
const songCtrl = require('../controllers/songs')

router.post('/songresults', songCtrl.show)
router.get('/:id', songCtrl.details)


module.exports = router
