const {sequelize,DataTypes} = require('../connection')

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



module.exports = {accounts};