const{booking,bookSeat,unbook}=require('../../ports/adaptersport/database/portDatabase')
///no restriction on id assumed it is passed by system
async function bookUseCase (typeOfAccount,name,passport_no,id,flight_id,price,seat_id,type){
    if (typeOfAccount == 'User' && passport_no.length== 8) {

       // if (passport_no.toString().length ) {  ////restriction on passport
            if (await booking(typeOfAccount, name, passport_no, id, flight_id, price, seat_id, type)) {

                if (await bookSeat(type, flight_id)) {
                    return true;
                } else {
                    await unbook(passport_no, flight_id); /////lw 3mlt bl id_book a7san ??? bs lsa htr aro7 agebo???????
                    return false;
                }

            } else return false;
        } else return false;
    // }
    // else return false;
}

module.exports = {bookUseCase}