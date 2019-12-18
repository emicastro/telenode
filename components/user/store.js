/* eslint-disable no-undef */
const Model = require('./model');

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

function listUsers(selectedUser) {
  filter = {};
  if (selectedUser !== null) {
    filter = { user: selectedUser };
  }
  return Model.find(filter);
}

module.exports = {
  add: addUser,
  list: listUsers,
};
