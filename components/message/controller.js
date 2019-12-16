const store = require('./store')

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message) {
            console.error('[messageController] User or message not found');
            reject('Data entered is wrong.')
            return false
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
    
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessages(filteredUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filteredUser))
    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if(!id || !message) {
            reject('Invalid data')
            return false;
        }

        const result = await store.update(id, message)
        resolve(result)
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if(!id) {
            reject('Invalid Id')
            return false
        }

        store.remove(id)
            .then(() => {
                resolve()
            })
            .catch(e => {
                reject(e)
            })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}