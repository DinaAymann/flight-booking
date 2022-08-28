const {sequelize,DataTypes} = require('../connection')

/////h3ml cascade?????????
///////el book hy8yr f table flight-------
//////el mwdo3 random fl seats----
const book = sequelize.define('book', {
    // Model attributes are defined here
    booked_for_name: {
        type: DataTypes.STRING,

        allowNull: false
    },
    passport_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    booked_by:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true

    },
    id_flight:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true

    },
    id_book:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
    id_s:{
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey:true,
    },
    seat_type: {
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



module.exports = {book};