function guestbookController (app) {
    app.get('/', function (req, res) {
        res.render('home')
    })
}


module.exports = guestbookController