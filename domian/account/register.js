const{register}= require('../../ports/adaptersport/database/portDatabase')
//username,password,email,type
async function registerUseCase (username,password,email,type){

    let msg="";

    let correct = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
    if(correct!=null){
   if( await register(username,password,email,type) )
   {
       msg = "registered"
       //console.log("registered");
   return msg;}
   else{


       msg = "not registered username or email already exists"
      // console.log("not registered.change");
       return msg;
  }}
    else {

       msg = "not registered email is in wrong format"
        return msg
    }
}


//registerUseCase();
module.exports = {registerUseCase}