const store = require('./store');

function initChat(users) {
  if (!users || !Array.isArray(users)) {
    return Promise.reject('Invalid user list.');
  }

  const chat = {
    users,
  };
  return store.add(chat);
}

function listChats(userId) {
  return store.list(userId);
}

module.exports = {
  initChat,
  listChats,
};
