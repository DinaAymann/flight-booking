const{accounts}=require('../models/account');
const {sequelize,DataTypes,Op} = require('../../database/connection');
//id not by session

async function dbBan (flag,id){
let result = await accounts.findOne({
    where: {
        [Op.and]: [
            {id: id},
            {type :{[Op.ne]:"Admin"}}
    ]
    }
});
    if(result!= null) {
    await accounts.update({banned: flag}, {
        where: {
            id: id
        }
    });

   console.log("banned/unbanned successfully");
    return true;
}
else{
    console.log("ban/unban failed");
    return false;
}
}
module.exports={
    dbBan
}
//dbBan('true','3')