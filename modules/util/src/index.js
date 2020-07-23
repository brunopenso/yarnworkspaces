const uuid4 = require( "uuid4" )

function geUuid() {
    return uuid4()
}
module.exports = {
    uuid: geUuid
}