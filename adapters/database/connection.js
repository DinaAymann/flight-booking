const {Sequelize, DataTypes, Model, Op} = require('sequelize');
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('Flights', 'postgres', '0000', {
    host: 'localhost',
    dialect: 'postgres'
});


sequelize.authenticate()
    .then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log("SOMETHING DONE GOOFED");
    })

module.exports = {sequelize,
 DataTypes,
 Model,
 Op,};

// const {Sequelize, DataTypes, Model, Op} = require('sequelize')
//
// // Creating new Object of Sequelize
// const sequelize = new Sequelize(
//     'Flights',
//     'postgres',
//     '0000', {
//
//         // Explicitly specifying
//         // mysql database
//         dialect: 'postgres',
//
//         // By default host is 'localhost'
//         host: 'localhost'
//     }
// );
//
// // Exporting the sequelize object.
// // We can use it in another file
// // for creating models
// module.exports = {sequelize,
// DataTypes,
// Model,
// Op,}