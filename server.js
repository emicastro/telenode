const express = require('express')
const router = express.Router()

var app = express()

app.use(router)

router.get('/', (req, res) => res.send('Get petition'))

router.post('/', (req, res) => res.send('Post petition'))

router.put('/', (req, res) => res.send('Put petition'))

router.delete('/', (req, res) => res.send('Delete petition'))

router.patch('/', (req, res) => res.send('Patch petition'))

app.listen(3000)
console.log('Server running on http://localhost:3000')