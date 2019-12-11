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
    
        console.log(fullMessage)
        resolve(fullMessage)
    })
}

module.exports = {
    addMessage,
}