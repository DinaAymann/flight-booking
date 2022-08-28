//////pass id by session
const {updateUsername,updateEmail,updatePassword}=require('../../ports/adaptersport/database/portDatabase')
async function changeUserName (name,id){
if (await updateUsername(name,id))
    return true;
else return false;
}
async function changePassword(password,id){
await updatePassword(password,id);
}
async function changeEmail(email,id){
if (await updateEmail(email,id))
    return true;
else return false;
}

module.exports = {
    changeUserName,
    changePassword,
    changeEmail
}