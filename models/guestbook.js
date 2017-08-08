var randomID = require('random-id')

function Guestbook () {
this._items =[]
}

Guestbook.prototype = {
    getItems: function () {
    return this._items
  },

    addItem: function(name, comment){
        this._items.push({
            id: randomID(),
            name: name,
            comment: comment
        })
    },

    removeItem: function(id){
        this._items = this._items.filter(function (item) {
            return item.id !== id
    })
    }
}

var guestbook = new Guestbook()

/*guestbook.addItem('Jacqui', 'Great visit')
guestbook.addItem('James', 'Didnt enjoy my visit')
guestbook.addItem('Rachel', 'Loved it')*/

module.exports = guestbook