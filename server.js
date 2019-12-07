const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const response = require('./network/response')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

router.get('/', (req, res) => {
    
    res.send('Get petition')
})

router.post('/', (req, res) => response.success )

router.put('/', (req, res) => res.send('Put petition'))

router.delete('/', (req, res) => res.send('Delete petition'))

router.patch('/', (req, res) => res.send('Patch petition'))

app.listen(3000)
console.log('Server running on http://localhost:3000')