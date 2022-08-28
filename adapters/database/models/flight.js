const {sequelize,DataTypes} = require('../connection')
const {book,accounts,aircraft} = require("./index");
//TIME hna sa7 ????
const flight = sequelize.define('flight', {
    // Model attributes are defined here
    id_flight: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    id_aircraft: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true
    },
    departure_time:{
        type: DataTypes.TIME,
        allowNull: false

    },
    arrive_time:{
        type: DataTypes.TIME,
        allowNull: false

    },
    from_:{
        type: DataTypes.STRING,
        default : 0 ,
        allowNull: false

    },
    to_:{
        type: DataTypes.STRING,
        allowNull: false

    },
    available_seats_b:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
    available_seats_e:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
    price_b:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
    price_e:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
}, {
    autoIncrement : 1,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
    // Other model options go here
});

flight.associations=models=>{
    flight.belongsToMany(models.accounts,{ through: models.book });
flight.belongsTo(models.aircraft);

}
// flight.belongsToMany(accounts,{ through: book });
// flight.belongsTo(aircraft);
module.exports = {flight};