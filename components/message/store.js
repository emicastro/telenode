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

async function getMessage() {
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessage,
    // get
    // update
    // delete
}