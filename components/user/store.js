const Model = require('./model')

function addUser(user) {
    const myUser = new Model(user)
    return myUser.save()
}

function listUsers(selectedUser) {
    filter = {}
    if (selectedUser !== null) {
        filter = {user: selectedUser}
    }
    const users = await Model.find(filter)
    return users
}

module.exports = {
    add: addUser,
    list: listUsers,
}