const test_api = require('./common');
async function run() {
    // await test_api.create_accaunt('t2');
    // let nemaes = ['t3','t4','t5']
    // await test_api.create_accounts(nemaes);
    // await test_api.contract_set();
    // const accounts = ['user','usermonthly','userweekly','userdaily','usersecondly','userlocked'];
    // await test_api.create_accounts(accounts);

    // await test_api.token_issue('user','1000 EOS');
    await test_api.base_test();
    // await test_api.addasset_action('eosio.token','4,EOS');
    // let accounts_2 = ['manager',EOSDTORCLIZE,EOSDTCNTRACT,ORACLERATES,

    // await test_api.wasmabi_set(
    //     '../system_contracts/eosio.token/eosio.token.wasm',
    //     '../system_contracts/eosio.token/eosio.token.abi',
    //     'eosio.token'
    // );

    // await test_api.wasmabi_set(
    //     '../system_contracts/eosio.wrap/eosio.wrap.wasm',
    //     '../system_contracts/eosio.wrap/eosio.wrap.abi',

    // );
}
run()