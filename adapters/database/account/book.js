const{book}=require('../models/index');
const{sequelize,DataTypes,Op}=require('../connection');
//----authorization//////type to only allow users to book (from session )
//update price
//--------id by session----
//------add type for easy altering flight
///---------MOMKEN Y INSERT W MYKMLSH
////check lw el decrement feh moshkela-----onProgress
//--------DONE/------VIP--------el seat m3 el flight tb2a unique ----join
//------method view seat/+++++ a3lm anhy seats el et7gzo-------VIP
//-------/// lw el seats 5lso lsa h2dr a7gz /////DONE
async function booking (typeOfAccount,name,passport_no,id,flight_id,price,seat_id,type){
let flag = false ;

    await book.create({

        booked_for_name: name,
        passport_number : passport_no,
        booked_by : id,
        id_flight : flight_id,
        price:price,
        id_s:seat_id,
        seat_type :type,

    }).then(result =>
        flag = true).catch(err => flag = false);


    //n2ll fl flight seats available
//     if (flag){
//         if (type == 'business'){
// await flight.decrement('available_seats_b', {
//         by: 1,
//         where: {
//             id_flight : flight_id,
//         }
//     }
//
// )}
//         else {
//             await flight.decrement('available_seats_e', {
//                     by: 1,
//                     where: {
//                         id_flight : flight_id,
//                     }
//                 }
//
//             )
//         }
//     }
//
//

   // console.log(flag);
    return flag ;


}


//booking('User', "jjjj",'910','2','1','3000',1,'economy')




async function  unbook (passport_no,id_flight){ ////aw id el book 3ltool bs keda for security

    await book.destroy({
        where:{
            [Op.and]:[
                {passport_number:passport_no},
                {id_flight:id_flight}

            ]

        }
    })

}









module.exports = {booking,unbook}