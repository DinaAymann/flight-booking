const {sequelize, DataTypes, Op} = require('../connection')
const {accounts, seats, flight} = require('./index')
//const{seats}=require('./seats')
/////a8yr el aircrafts w el seat no l unique -----------
const Aircrafts = sequelize.define('aircrafts', {
    // Model attributes are defined here
    id_account: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true

    },
    id_aircraft: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false

    },
}, {
    autoIncrement: 1,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    tableName:"aircrafts"
    // Other model options go here
});
Aircrafts.associations = models => {

    // aircrafts.belongsTo(models.accounts);
    Aircrafts.hasMany(models.Seats, {
            foreignKey: "id_aircraft",

        }
    );
    // aircrafts.belongsTo(models.seats,
    //     {foreignKey: 'id_aircraft',sourceKey: 'id_aircraft'}
    // );
    // aircrafts.hasMany(models.flight);

}
module.exports = {
    Aircrafts
}

//aircraft.hasMany(seats);
// aircraft.belongsTo(accounts);
// aircraft.hasMany(seats);
// aircraft.hasMany(flight);
