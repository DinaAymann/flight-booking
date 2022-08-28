
const{flight}=require('../models/index');
const{sequelize,DataTypes,Op}=require('../connection');
async function bookSeat (type,flight_id) {
let flag = true;
    if (type == 'business') {
        await flight.decrement('available_seats_b', {
                by: 1,
                where: {
                    id_flight: flight_id,
                }
            }
        ).catch(err=> {flag= false})
    } else {
        await flight.decrement('available_seats_e', {
                by: 1,
                where: {
                    id_flight: flight_id,
                }
            }
        ).catch(err=> {flag= false})
    }
    return flag;
}

async function cancelSeatBooking (type,flight_id) {

    if (type == 'business') {
        await flight.increment('available_seats_b', {
                by: 1,
                where: {
                    id_flight: flight_id,
                }
            }
        ).catch(err=> {return false})
    } else {
        await flight.increment('available_seats_e', {
                by: 1,
                where: {
                    id_flight: flight_id,
                }
            }
        ).catch(err=> {return false})
    }
    return true;
}



module.exports = {bookSeat,cancelSeatBooking}