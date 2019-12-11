const express = require('express')
const response = require('../../network/response')
const router = express.Router()

router.get('/', (req, res) => {
    res.header({
        "custom-header": "Custom value",
    })
    response.success(req, res, 'Messages list.')
})

router.post('/', (req, res) => {
    if(req.query.error == 'ok') {
        response.error(req, res, 'Unespected Error', 500, '')
    } else {
        response.success(req, res, 'Message created', 201)
    }
})

module.exports = router