const store = require('./store');
const { socket } = require('../../socket');
const config = require('../../config');

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] User, chat or message not found');
      reject('Data entered is wrong.');
      return false;
    }

    const filePath = '';
    if (file) {
      fileUrl = `${config.host}:${config.port}${config.publicPath}/${config.filesPath}/${file.filename}`;
    }

    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: filePath,
    };

    store.add(fullMessage);

    socket.io.emit('message', fullMessage);

    resolve(fullMessage);
  });
}

function getMessages(filteredUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filteredUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false;
    }

    const result = await store.update(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid Id');
      return false;
    }

    store.remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
