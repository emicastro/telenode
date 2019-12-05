const express = require('express')

var app = express()

app.use('/', (req, res) => res.send('Hello Word!'))

app.listen(3000)
console.log('Server running on port 3000');
