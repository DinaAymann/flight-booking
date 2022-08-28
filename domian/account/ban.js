const {dbBan,notAdmin} = require('../../ports/adaptersport/database/portDatabase')
async function ban (flag,id,type) {
    ///flag dropdown so will not handel its error, yet id is manual
    if(!isNaN(parseInt(id,10)) && type=='Admin') {

        if (await notAdmin(id)) {
            await dbBan(flag, id);
            return true;
        } else return false;
    }
    else return false ; /////input wrong type

}

module.exports = ban ;