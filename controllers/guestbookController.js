var bodyParser = require('body-parser')
var guestbook = require('../models/guestbook.js')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

function guestbookController (app) {
    app.get('/', function (req, res) {
        res.render('home', {
            guestbook: guestbook.getItems()
        })
    })

    app.post('/', urlencodedParser, function (req, res) {
        guestbook.addItem(req.body.name, req.body.comment)
            res.render('home', {
                guestbook: guestbook.getItems()
            })
    })

    app.delete('/', urlencodedParser, function (req, res) {
          guestbook.removeItem(req.body.id)
            res.render('home', {
                guestbook: guestbook.getItems()
            })
    })
}


module.exports = guestbookController