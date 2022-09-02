const{viewSeats}=require('../../ports/adaptersport/database/portDatabase')
async function viewSeatsDomain (flight,aircraft,type){
    return( await viewSeats(flight,aircraft,type));
}

module.exports = {viewSeatsDomain}