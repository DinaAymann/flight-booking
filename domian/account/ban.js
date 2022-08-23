const {dbBan} = require('../../ports/adaptersport/database/portdatabase')
async function ban (flag,id) {
    if (await dbBan(flag,id)) return true;
    else return false;

}

module.exports = ban ;