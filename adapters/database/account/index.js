const {userExist,} = require('./accountExistType');
const {dbBan,notAdmin} = require('./bann')//nfs el esm
const{register}=require('./register')
const {updatePassword,updateEmail,updateUsername}=require('./editAccountInfo')
const {listAccounts}=require('./listAccounts')
const {bookSeat,cancelSeatBooking}=require('./bookFlightSeats')
const{booking,unbook}=require('./book')
const{insertAircraft}=require('./insertAircrafts')
const{viewSeats}=require('./viewSeats')
module.exports = {
    userExist,
    dbBan,
    register,
    updateEmail,
    updateUsername,
    updatePassword,
    listAccounts,
    booking,
    bookSeat,
    unbook,
    cancelSeatBooking,
    insertAircraft,
    notAdmin,
    viewSeats
}