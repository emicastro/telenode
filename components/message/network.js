const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.header({
        "custom-header": "Custom value",
    })
    response.success(req, res, 'Messages list.')
})

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, 'Invalid information', 400, 'Error into controller')
        })
})

module.exports = router