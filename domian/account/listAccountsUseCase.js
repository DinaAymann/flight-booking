const{listAccounts}=require('../../ports/adaptersport/database/portDatabase')
async function listAccountsUseCase (Type,search,page,size){
    if (Type=='Admin') {
        return (await listAccounts(Type, search, page, size));
    }
    else return null;
}


module.exports = {listAccountsUseCase}