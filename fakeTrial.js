const {loginUseCase} = require('./ports/domainports/account');
function login (username,password ){
    loginUseCase(username,password);
}


login("Dfda","12345");