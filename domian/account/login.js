
const{userExist,}= require('../../ports/adaptersport/database/portdatabase')

  async function loginUseCase (username,password){ //aync 3shan btcall 7aga btshof el db ?
    let sessionAssign = await userExist(username,password)
   if (sessionAssign!=null){
//to home page
       console.log("succeeded to login");
       return sessionAssign;
   }
   else { console.log("failed to login");
       return sessionAssign;}

    }

//loginUseCase ("register","try");
module.exports = loginUseCase;