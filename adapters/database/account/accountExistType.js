const{accounts}=require('../models/index') ;//imported from an adapter ?
const {sequelize,DataTypes,Op} = require('../../database/connection'); //should i import this ???



///////na2s ashof lw banned wala l2 + session +
//////eh.then promise !

 async function userExist(username,password){   //should we use async and await
   /// let  result =
       const result= await accounts.findOne({
           raw: true,
           attributes: ['id', 'type'],
         where: {
             [Op.and]: [
                 {username: username},
                 {password: password},
                 {banned :'0'}
             ]
         }
     });

    //         .then(data => { return (data != null) ? true : false
    //
    // });

     //        .then(count => {
     //     return (count >0) ? true : false
     // });
     console.log("result");
 console.log(result);
   if (result != null){
    return result;}

   else return result;

}


//userExist("Dina","12345");
module.exports = {userExist} ;