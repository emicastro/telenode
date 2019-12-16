const db = require('mongoose')

db.Promise = global.Promise

async function connect(url) {
    // 'mongodb+srv://db_user:BhJi8ywvZrT7YQc5@cluster0-lxzrb.mongodb.net/telegrom_db'
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('[db] connected successfully')
}

module.exports = connect