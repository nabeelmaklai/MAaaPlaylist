const show = (req, res) => {
  console.log('This is the body', req.body.name)
  console.log('This works')
  res.render('songs/songdetails')

}

module.exports = {
  show
}
