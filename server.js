const express = require('express')
const app = express()
const server = require('http').Server(app)

const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://db_user:BhJi8ywvZrT7YQc5@cluster0-lxzrb.mongodb.net/telegrom_db')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

socket.connect(server)

router(app)

app.use('/app', express.static('public'))

server.listen(3000, function() {
    console.log('Server running on http://localhost:3000')
})