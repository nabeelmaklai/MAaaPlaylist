const Song = require('../models/song')

const show = async (req, res) => {
  try {
    const songs = await Song.find({
      name: { $regex: req.body.name, $options: 'i' }
    })
    if (songs.length === 0) {
      res.send('No songs found')
    } else {
      console.log(songs)
      res.render('songs/songdetails', { title: 'Results', songs })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  show
}
