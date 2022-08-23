const { loginUseCase,
         registerUseCase,
    changeEmail,
    changePassword,
    changeUserName,
    ban

}= require('../../domian/account/index')
module.exports = {
   loginUseCase,
   registerUseCase,
    changeEmail,
    changePassword,
    changeUserName,
    ban: ban
};