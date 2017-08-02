var express = require('express')

var app = express()

require('./controllers/guestbookController.js')(app)

app.listen(3000)