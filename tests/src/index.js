
const test_api = require('./common');
async function run(){
    //await a.create_accaunt('t2');
    let nemaes = ['t3','t4','t5']
    await test_api.create_accounts(nemaes);
}
run()