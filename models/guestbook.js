var mongoose = require('mongoose')

var guestbookSchema = new mongoose.Schema({
  name: String,
  comment:String
})

var Guestbook = mongoose.model('Guestbook', guestbookSchema)

module.exports = Guestbook