const {accounts} = require('./account') //nfs el esm
const{book}=require('./book')
const{flight}=require('./flight')
const {aircraft}=require('./aircrafts')
const {sequelize} = require("../connection");
const{seats}=require('./seat')
module.exports = {
    accounts,
    book,
    flight,
    aircraft,
    seats
}