const{accounts}=require('../models/index') ;//imported from an adapter ?
const {sequelize,DataTypes,Op} = require('../../database/connection');
//email.match(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
/////change it to be by promise VIP//////////
/////check if username and email does not exist ----DONE
//// indication that it works -----DONE
//auto increment ----DONE
async function register(username , password,email,type){
    const result= await accounts.findOne({
        where: {
            [Op.or]: [
                {username: username},
                {email: email}

            ]
        }
    });
   if(result== null) {
       console.log("yes");
        await accounts.create({

            username: username,
            password: password,
            email: email,
            type: type,
            banned: 0,
        });
        return true;

    }
    else { console.log("no");
        return false;
    }

}


module.exports = {register}

//register("zzggg","er4t5","6666gg","user");