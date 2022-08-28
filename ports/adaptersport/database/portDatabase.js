// const {userExist}= require('/adapters/database/account/accountExistType')
const {
    dbBan,
    userExist,
    register,
    updateUsername,
    updateEmail,
    updatePassword,
    listAccounts,
    booking,
    bookSeat,
    unbook,
    cancelSeatBooking,
    insertAircraft,
    notAdmin,
    viewSeats
} = require('../../../adapters/database/account/index')
module.exports = {
    userExist,
    dbBan,
    register,
    updateUsername,
    updateEmail,
    updatePassword,
    listAccounts,
    booking,
    bookSeat,
    unbook,
    cancelSeatBooking,
    insertAircraft,
    notAdmin,viewSeats

};
