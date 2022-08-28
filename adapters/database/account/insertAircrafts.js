const {aircraft}=require('../models/index')
const{sequelize,DataTypes,Op}=require('../connection')
////a3dl fl table
async function insertAircraft (id_account,code){

let flag = false;
  let result =  await aircraft.findOne({
        where:{
            code:{[Op.iLike] : code}
        }
    })

    if (result == null) {
        await aircraft.create({
            id_account: id_account,
            code: code,
        }).then(res => {
                console.log("True");
                flag = true;
            }).catch(err => {
                console.log("false");
                flag = false;
            });

    }
    return flag ;


}
//insertAircraft('3','777');


module.exports = {insertAircraft}