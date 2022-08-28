const{accounts}= require('../models/account');
const {sequelize,DataTypes,Op} = require('../../database/connection')


async function updateUsername (username,id){
  let unique =  await accounts.findOne({
        where: {
             username: username,

        }
    });
  if (unique==null){
 await accounts.update(
          { username: username },
          { where: { id: id } }
      );
  console.log("DONE");



      return true;
  }
  else{ console.log("exists")
      return false;}

}



async function updateEmail(email, id ){
    let result=
    await accounts.findOne({
        where: {
            email: email,

        }
    });
           if (result==null){
              await accounts.update(
                   { email: email },
                   { where: { id: id } }
               );

               console.log("emailUpdated");
               return true;
           }

    else {
               console.log("emailFailed");
               return false;

               }





}
//updateEmail("rrrrr",2);

async function updatePassword(password,id){

    await accounts.update(
        { password: password },
        { where: { id: id } }
    );
}

module.exports = {
    updateUsername,
    updateEmail,
    updatePassword,
}