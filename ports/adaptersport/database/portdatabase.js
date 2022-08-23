// const {userExist}= require('/adapters/database/account/accountExistType')
const {
    dbBan,
    userExist,
    register,
    updateUsername,
    updateEmail,
    updatePassword
} = require('../../../adapters/database/account/index')
module.exports = {
    userExist,
    dbBan,
    register,
    updateUsername,
    updateEmail,
    updatePassword
};
