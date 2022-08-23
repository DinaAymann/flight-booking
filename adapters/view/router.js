const {loginUseCase,registerUseCase,changeEmail
    ,changePassword,changeUserName,ban} = require('../../ports/domainports/account')

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
    if (await registerUseCase(user, pass,email,type) ) {console.log(" allowed to register ");
        res.send("allowed to register")
    }
    else{ console.log("register denied");
        res.send("register denied")}

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
    let flag = req.body.flag;
    let id = req.body.id;


    if (await ban(flag, id)){
    res.send("banned/unbanned");}
    else res.send("failed");




    //add the session
})




module.exports = router