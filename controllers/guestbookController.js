var bodyParser = require('body-parser')
var guestbook = require('../models/Guestbook.js')

var urlencodedParser = bodyParser.urlencoded({ extended: false })


function renderGuestbook (res) {
  guestbook.find({}, function (error, results) {
    if (error) {
      throw new Error(error)
    }

    res.render('home', {
      guestbook: results
    })
  })
}

function guestbookController (app) {
    app.get('/', function (req, res) {
        renderGuestbook(res)
    })

    app.post('/', urlencodedParser, function (req, res) {
        guestbook({
            name: req.body.name,
            comment: req.body.comment
        }).save(function (error) {
        if (error) {
            throw new Error(error)
        }

        renderGuestbook(res)
        })
        
    })

    app.delete('/', urlencodedParser, function (req, res) {
            guestbook.find({ _id: req.body.id }).remove(function (error) {
                if (error) {
                    throw new Error(error)
                }

                renderGuestbook(res)
            })
    })
}


module.exports = guestbookController