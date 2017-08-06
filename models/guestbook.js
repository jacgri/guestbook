var randomID = require('random-id')

function Guestbook () {
this._items =[]
}

Guestbook.prototype = {
    getItems: function () {
    return this._items
  },

    addItem: function(name,comment){
        this._items.push({
            id: randomID(),
            name: name,
            comment:comment
        })
    }
}

var guestbook = new Guestbook()

guestbook.addItem('Jacqui', 'Great visit')
guestbook.addItem('James', 'Didnt enjoy my visit')
guestbook.addItem('Rachel', 'Loved it')

module.export = guestbook