const{insertAircraft}=require('../../ports/adaptersport/database/portDatabase')
async function addAircraft (id_account,code){
   let result =  await insertAircraft(id_account,code)
   if ( result){
       return true;}
   else return false;

}

module.exports = {addAircraft}