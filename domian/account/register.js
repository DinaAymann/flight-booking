const{register}= require('../../ports/adaptersport/database/portdatabase')

async function registerUseCase (username,password,email,type){

   if( await register(username,password,email,type) )
   {console.log("registered");
   return true;}
   else{
       console.log("not registered.change");
       return false;
   }
}

module.exports = {registerUseCase}