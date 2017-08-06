var guestbook = require('../models/guestbook.js')

function guestbookController (app) {
    app.get('/', function (req, res) {
        res.render('home', {
            guestbook: guestbook.getItems()
        })
    })
}


module.exports = guestbookController