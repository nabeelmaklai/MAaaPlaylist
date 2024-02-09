const Song = require('../models/song')

const show = async (req, res) => {
  try {
    const songs = await Song.find({
      name: { $regex: req.body.name, $options: 'i' }
    })
    if (songs.length === 0) {
      res.send('No songs found')
    } else {
      res.render('songs/songresults', { title: 'Results', songs })
    }
  } catch (error) {
    console.log(error)
  }
}

const details = async (req, res) => {
  const songdetails = await Song.findById(req.params.id)
  res.render('songs/songdetails', { title: 'Details', songdetails })
}

module.exports = {
  show,
  details
}
