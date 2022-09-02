const {seats, aircraft, flight, book} = require('../models/index')
const {sequelize, DataTypes, Op,Model} = require('../connection')

///////keda el t2sema sa7 ?????????
//id_flight,id_aircraft,type
async function viewSeats(id_flight,idAircraft,type) {
  // let id_a = parseInt(idAircraft)
   try{ const result =
  await sequelize.query('SELECT seats.id_s, aircraft.id_aircraft from seats inner join\n' +
      ' aircraft on aircraft.id_aircraft = seats.id_aircraft where seats.type= ? and aircraft.id_aircraft=? \n' +
      ' and not exists  ( select * from book where book.id_flight = ? and id_s = seats.id_s)',{ replacements : [type ,idAircraft ,id_flight]});
    return result[0];}
    catch (err){
       console.log(err)

    }
    // try {
    //     let result = await seats.findAll({
    //         include: [{
    //             as: "aircrafts_test",
    //             model:sequelize.models.Aircrafts
    //
    //         }],
    //         attributes: ["id_s"],
    //     })
    //
    //     return (result);
    // } catch (err) {
    //     return err
    // }

}

//viewSeats('1','1');
module.exports = {viewSeats}