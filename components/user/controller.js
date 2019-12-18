const store = require('./store');

function addUser(name) {
  if (!name) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('Invalid name');
  }
  const user = {
    name,
  };
  return store.add(user);
}

function listUsers(name) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, _reject) => {
    resolve(store.list(name));
  });
}

module.exports = {
  addUser,
  listUsers,
};
