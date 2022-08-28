const{accounts}=require('../models/index');
const{sequelize,DataTypes,Op}=require('../connection');
const {INTEGER} = require("sequelize");
//typeAccess by session ------
///contains
//error lw mfesh page w size--------
///n sort 3shan el paging ???????????
async function listAccounts (typeAccess,search,page,size){

    // if (typeAccess=='Admin'){

      let query = {
          limit:parseInt(size),
          offset:(page * size),
          raw: true,
          attributes: ['id','username', 'email','type','banned'],
      }


        if (search != '') {

            if (!isNaN(parseInt(search,10))){
                query={
                    ...query,
                where: {id :{[Op.like]: '%'+search+'%'}}




                }
            }else{
                query={
                    ...query,
                 where: {
                [Op.or]: [
                    {username : {[Op.iLike]: '%'+search+'%'}},
                    {type: {[Op.iLike]: '%'+search+'%'}},
                    {email:{[Op.iLike]: '%'+search+'%'}}
                ]
            }



                }

            }

        }
 let result =await accounts.findAll(
    query
)
        return result

// if (search == '') {
//     return (
//         await accounts.findAll({
//             limit:size,
//             offset:(page * size),
//             raw: true,
//             attributes: ['id','username', 'email','type','banned'],
//             // where: {
//             //     [Op.and]: [
//             //         {username: username},
//             //         {password: password},
//             //         {banned :'0'}
//             //     ]
//             // }
//
//         })
//     )
// }
// else{
//
//
// if (!isNaN(parseInt(search,10))){
//     return (
//         await accounts.findAll({
//             raw: true,
//             attributes: ['id','username', 'email','type','banned'],
//              where: {
//                 [Op.or]: [
//
//                     {id : search},
//
//                 ]
//             }
//
//         })
//     ) }
// else {
//     console.log('%' + search + '%' );
//     return (
//         await accounts.findAll({
//             raw: true,
//             attributes: ['id','username', 'email','type','banned'],
//             where: {
//                 [Op.or]: [
//                     {username : {[Op.iLike]: '%'+search+'%'}},
//                     {type: search},
//                     {email:search}
//                 ]
//             }
//
//         })
//     )
// }
// }
//
//
//
//    }
//     else return null;

    // await accounts.findOne({
    //
    // }).then (result=>
    //
    // ).catch(err=>
    // );

}

//listAccounts('Admin',"GGGG")
module.exports = {listAccounts}

