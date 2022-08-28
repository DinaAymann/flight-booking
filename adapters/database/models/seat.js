const {sequelize, DataTypes, model} = require('../connection')
//const{aircraft, accounts}=require('./index')
const {aircraft} = require('./index')
// const aircraft = await sequelize.query('SELECT * FROM aircraft', {
//     model: aircraft,
//     mapToModel: true // pass true here if you have any mapped fields
// });

const Seats = sequelize.define('seats', {
    // Model attributes are defined here
    id_s: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
        //autoIncrement:true,

    },
    seat_no: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_aircraft: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false

    },
    type: {
        type: DataTypes.STRING,
        allowNull: false

    },

},
    {
        autoIncrement : 1,
        createdAt: false,
        updatedAt: false,
        freezeTableName: true,
        tableName:"seats"
    });
Seats.associations = models => {
    Seats.belongsTo(models.Aircrafts,{
       as:"aircrafts_test",
       foreignKey:"id_aircraft"
   })
}
module.exports = {

    Seats
}
