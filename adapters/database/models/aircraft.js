const {sequelize,} = require('adapters/database/connection')

const aircraft = sequelize.define('aircraft', {
    // Model attributes are defined here
    id_account: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_aircraft: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    code :{
        type: DataTypes.INTEGER,
        allowNull: false

    },
}, {
    // Other model options go here
});