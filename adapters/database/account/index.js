const {userExist,} = require('./accountExistType');
const {dbBan} = require('./bann')//nfs el esm
const{register}=require('./register')
const {updatePassword,updateEmail,updateUsername}=require('./editAccountInfo')
module.exports = {
    userExist,
    dbBan,
    register,
    updateEmail,
    updateUsername,
    updatePassword
}