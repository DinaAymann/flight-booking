const {Seats, Aircrafts, flight, book} = require('../models/index')
const {sequelize, DataTypes, Op,Model} = require('../connection')

///////keda el t2sema sa7 ?????????
async function viewSeats() { ///type
    // id_flight,id_aircraft
    try {
        let result = await Seats.findAll({
            include: [{
                as: "aircrafts_test",
                model:sequelize.models.Aircrafts

            }],
            attributes: ["id_s"],
        })

        return (result);
    } catch (err) {
        return err
    }

}

//viewSeats('1','1');
module.exports = {viewSeats}