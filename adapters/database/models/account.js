const {sequelize,DataTypes,Model} = require('../connection')
const {flight,book,aircraft}=require('./index')
const {Sequelize} = require("sequelize");

const accounts = sequelize.define('accounts', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false

    },
    password:{
        type: DataTypes.STRING,
        allowNull: false

    },
    banned:{
        type: DataTypes.BOOLEAN,
        default : 0 ,
        allowNull: false

    },
    type:{
        type: DataTypes.STRING,
        allowNull: false

    },
}, {
    autoIncrement : 1,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
    // Other model options go here
});
accounts.associations=models=>{
    accounts.hasMany(models.aircraft)
    accounts.belongsToMany(models.flight,{through: models.book})
}
// accounts.hasMany(book, {
//     foreignKey: 'booked_by'
// });
//accounts.belongsToMany(flight,{through: book})
//accounts.hasMany("aircraft");

module.exports = {accounts};