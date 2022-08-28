const{accounts}=require('../models/account');
const {sequelize,DataTypes,Op} = require('../../database/connection');
//id not by session



async function notAdmin (id){
    let result = await accounts.findOne({
        where: {
            [Op.and]: [
                {id: id},
                {type :{[Op.ne]:"Admin"}}
            ]
        }
    });

    if (result != null){
        return true;
    }
    else return false;
}

async function dbBan (flag,id){

// let result = await accounts.findOne({
//     where: {
//         [Op.and]: [
//             {id: id},
//             {type :{[Op.ne]:"Admin"}}
//     ]
//     }
// });
//     if(result!= null) {
    await accounts.update({banned: flag}, {
        where: {
            id: id
        }
    });

 //  console.log("banned/unbanned successfully");
   // return true;
// }
// else{
//     console.log("ban/unban failed");
//     return false;
// }
}
module.exports={
    dbBan,
    notAdmin
}
//dbBan('true','3')