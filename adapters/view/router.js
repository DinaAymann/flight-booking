const {loginUseCase,registerUseCase,changeEmail
    ,changePassword,changeUserName,ban,listAccountsUseCase,bookUseCase,cancelBooking
,addAircraft,} = require('../../ports/domainports/account')
const{viewSeats}=require('../../ports/adaptersport/database/portDatabase')
const express = require('express');


//const session = require('express-session');  ////??????a3mlha ezaaaaaaaaay???

const router = new express.Router();

router.post('/login', async function (req, res) {
    let user = req.body.username;
    let pass = req.body.password;
    // const{
    //     username,
    //     password
    // }=req.body
    let sessionAssign = await loginUseCase(user, pass);
    if (sessionAssign!= null){res.send(" allowed to login ");
       // req.session.idsession = sessionAssign.id;
      //  req.session.typesession =sessionAssign.type;

    }
    else res.send("login denied");

    //add the session
})
router.post('/register',async function (req, res) {
    let user = req.body.username;
    let pass = req.body.password;
    let email = req.body.email;
    let type = req.body.type;
    // const{
    //     username,
    //     password
    // }=req.body
    let result = await registerUseCase(user, pass, email, type)
        res.send(result)
    // }
    // else{ console.log("register denied");
    //     res.send("register denied")}

    //add the session
})


router.post('/changeUsername',async function (req, res) {
    let user = req.body.username;
    let id = req.body.id;

    // const{
    //     username,
    //     password
    // }=req.body
    if (await changeUserName(user, id) ) {console.log(" updated useername");
        res.send("updated")
    }
    else{ console.log("not allowed");
        res.send("not allowed")}

    //add the session
})

router.post('/changeEmail',async function (req, res) {
    let email = req.body.email;
    let id = req.body.id;

    // const{
    //     username,
    //     password
    // }=req.body
    if (await changeEmail(email, id) ) {console.log(" updated email");
        res.send("updated")
    }
    else{ console.log("not allowed");
        res.send("not allowed")}

    //add the session
})



router.post('/changePassword',async function (req, res) {
    let password = req.body.password;
    let id = req.body.id;

    // const{
    //     username,
    //     password
    // }=req.body
    await changePassword(password, id)
    console.log(" updated password");
        res.send("updated");



    //add the session
})


router.post('/ban',async function (req, res) {

   ///authorization
    let type = (req.header("Authorization")).toString().substring("Bearer ".length);
    let flag = req.body.flag;
    let id = req.body.id;


    if (await ban(flag, id,type)){
    res.send("banned/unbanned");}
    else res.send("failed");




    //add the session
})




router.get('/listAccounts',async function (req, res) {
    let type = (req.header("Authorization")).toString().substring("Bearer ".length);//put in domain???
    let search =(req.query).search;
    let page = req.query.page;
    let size= req.query.size
   // let search2 = search["search"];
        res.send((await listAccountsUseCase(type,search,page,size)));






    //add the session
})

// "typeOfAccount":"User",
//     "name":"tttt",
//     "passport_no":"14442", ///hykon of length 8
//     "id":"2",
//     "flight_id":"1",
//     "price":"9000",
//     "seat_id":"1",
//     "type_seat":"business"

router.post('/book',async function (req, res) {
    //typeOfAccount,name,passport_no,id,flight_id,price,seat_id,type_seat
    let typeOfAccount = (req.header("Authorization")).toString().substring("Bearer ".length);;
    let name = req.body.name;
    let passport_no = req.body.passport_no;
    let id = req.body.id;
    let flight_id = req.body.flight_id;
    let price = req.body.price;
    let seat_id = req.body.seat_id;
    let type_seat = req.body.type_seat;

// const{
//
//
// }=req.body

    if (await bookUseCase(typeOfAccount,name,passport_no,id,flight_id,price,seat_id,type_seat))
    res.send("DONE BOOKING");
    else   res.send("Failed BOOKING");






    //add the session
})



router.delete('/cancelBooking',async function (req, res) {
  //  let type = (req.header("Authorization")).toString().substring("Bearer ".length);//put in domain???
    let passport_no =(req.query).passport_no;  ///no encryption nd5l el id of book w 5alas ??????
    let type = req.query.type;
    let id_flight= req.query.id_flight
    // let search2 = search["search"];
    res.send((await cancelBooking(passport_no,id_flight,type)));






    //add the session
})


router.post('/addAircraft',async function (req, res) {
    let account = req.body.account;
    let code = req.body.code;

let result = await addAircraft(account, code)
    if (result){
        res.send("Added");}
    else res.send("notAdded");




    //add the session
})


router.get('/viewSeats',async function (req, res) {

    // let search2 = search["search"];
    res.send((await viewSeats()));






    //add the session
})


module.exports = router