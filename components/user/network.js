const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err)
        })
})

router.get('/', (req, res) => {
    selectedUser = req.query.name || null
    controller.listUsers(selectedUser)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(err => {
            response.error(req, res, 'Unexpected error', 500, err)
        })
})

module.exports = router