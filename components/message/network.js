const express = require('express');
const multer = require('multer');
const config = require('../../config');

const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

const upload = multer({
  dest: `public/${config.filesPath}/`,
});

router.get('/', (req, res) => {
  const filterMessages = req.query.chat || null;
  controller.getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected Error', 500, e);
    });
});

router.post('/', upload.single('file'), (req, res) => {
  controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(req, res, 'Invalid information', 400, 'Error into controller', e);
    });
});

router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Internal error', 500, e);
    });
});

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Message ${req.params.id} deleted.`, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Internal error', 500, e);
    });
});

module.exports = router;
