const loginUseCase = require ('./login')
const ban =require('./ban')
const{registerUseCase}=require("./register")
const{changeEmail,changePassword,changeUserName}= require('./modifyAccountInfo')
const{listAccountsUseCase}=require('./listAccountsUseCase')
const{bookUseCase,}=require('./book')
const{cancelBooking}=require('./cancelBooking')
const{addAircraft}=require('./modifyAircraft')
const{viewSeatsDomain}=require('../flights/viewAvailableSeats')
module.exports = {
    loginUseCase,
    ban,
    registerUseCase,
    changePassword,
    changeUserName,
    changeEmail,
    listAccountsUseCase,
    bookUseCase,
    cancelBooking,addAircraft,
    viewSeatsDomain

}