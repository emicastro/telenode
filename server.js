const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const router = require('./network/routes')

db('mongodb+srv://db_user:BhJi8ywvZrT7YQc5@cluster0-lxzrb.mongodb.net/telegrom_db')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//app.use(router)
router(app)

app.listen(3000)
console.log('Server running on http://localhost:3000')