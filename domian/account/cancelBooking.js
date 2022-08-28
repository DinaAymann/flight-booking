const{unbook,cancelSeatBooking}=require('../../ports/adaptersport/database/portDatabase')
async function cancelBooking (passport_no,id_flight,type){ ///dh hygyly mn el record //wala hygy id el book wana ageb dool

    if (unbook(passport_no,id_flight)){
        if (cancelSeatBooking(type,id_flight)){
            return true;

        }
        ////a handel el case deh ??????
    }
    else return false
}

module.exports = {cancelBooking}