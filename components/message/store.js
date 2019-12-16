const db = require('mongoose')
const Model = require('./model')

db.Promise = global.Promise
db.connect('mongodb+srv://db_user:BhJi8ywvZrT7YQc5@cluster0-lxzrb.mongodb.net/telegrom_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
console.log('[db] connected successfully')

function addMessage(message) {
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages(filteredUser) {
    let filter = {}
    if(filteredUser !== null) {
        filter = { user: filteredUser}
    }
    const messages = await Model.find(filter)
    return messages
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    })
    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add:        addMessage,
    list:       getMessages,
    update :    updateText,
    remove :    removeMessage
    // get
    // update
    // delete
}