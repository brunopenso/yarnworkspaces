const uuid = require('uuidv4')

function generate() {
    return uuid.uuid()
}

module.exports = {
    generate
}