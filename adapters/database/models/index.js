const {accounts} = require('./account') //nfs el esm
const{book}=require('./book')
const{flight}=require('./flight')
const {Aircrafts}=require('./aircrafts')
const {sequelize} = require("../connection");
const{Seats}=require('./seat')
module.exports = {
    accounts,
    book,
    flight,
    Aircrafts,
    Seats
}