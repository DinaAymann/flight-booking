const {sequelize,} = require('adapters/database/connection')


// const aircraft = await sequelize.query('SELECT * FROM aircraft', {
//     model: aircraft,
//     mapToModel: true // pass true here if you have any mapped fields
// });
const seats = sequelize.define('seats', {
    // Model attributes are defined here
    id_s: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    seat_no : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_aircraft  :{
        type: DataTypes.INTEGER,
        allowNull: false

    },
    type :{
        type: DataTypes.STRING,
        allowNull: false

    },
}, {
    // Other model options go here
});