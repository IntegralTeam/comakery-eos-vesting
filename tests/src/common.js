const { Api, JsonRpc } = require("eosjs");
const { Serialize } = require(`eosjs`);
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig"); // development only
const fetch = require("node-fetch"); //node only
const { TextDecoder, TextEncoder, isString } = require("util"); //node only
const fs = require('fs');

const privateKeys = ["5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"];

const signatureProvider = new JsSignatureProvider(privateKeys);
const rpc = new JsonRpc("http://127.0.0.1:8888", { fetch }); //required to read blockchain state
const api = new Api({
  rpc,
  signatureProvider,
  textDecoder: new TextDecoder(),
  textEncoder: new TextEncoder(),
}); //required to submit transactions

const EOS_SYMBOL_STR = 'EOS';
const REX_SYMBOL_STR = 'REX';
const USD_SYMBOL_STR = 'USD';
const CNY_SYMBOL_STR = 'CNU';
const STABLE_SYMBOL_STR = 'EOSDT';
const EOSDT_SYMBOL_STR = 'EOSDT';
const NUT_SYMBOL_STR = 'NUT';
const DAPP_SYMBOL_STR = 'DAPP';
const KG_SYMBOL_STR = 'KGRAM';
const USDT_SYMBOL_STR = 'USDT';
const ORE_SYMBOL_STR = 'ORE';

const CMKRYVESTING = 'cmkryvesting';
const EOSDTORCLIZE = 'eosdtorclize';
const EOSDTCNTRACT = 'eosdtcntract';
const ORACLERATES = 'orarates';
const EOSDTLIQDATR = 'eosdtliqdatr';
const EOSDTNUTOKEN = 'eosdtnutoken';
const EOSDTSTTOKEN = 'eosdtsttoken';
const EOSDTGOVERNC = 'eosdtgovernc';
const EOSDTBPPROXY = 'eosdtbpproxy';
const EOSDTEXCHANG = 'eosdtexchang';
const TOKENSWAP_EQ = 'tokenswap.eq';
const EOSIO_EVM = 'eosio.evm';
const EOSDTSAVINGS = 'eosdtsavings';
const TETHERTETHER = 'tethertether';
const EOS2DTDOTCOM = 'eos2dtdotcom';
const EOSLOTTERYEQ = 'eoslotteryeq';
const EOSDTKGTOKEN = 'eosdtkgtoken';
const DAPPSERVICES = 'dappservices'

const ACTION_ADDASSET = 'addasset';

export async function addasset(asset_contract, asset_symbol) {
  const result = await api.transact({
    actions: [{
      account: 'eosio',
      name: 'addasset',
      authorization: [{
        actor: 'eosio',
        permission: 'active',
      }],
      data: {
        asset_contract: asset_contract,
        asset_symbol: asset_symbol,
      }
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
  console.log("addasset: " + result);
}

export async function token_issue(to, quantity, memo = '') {
  try {
    let issuer = 'eosio';
    if (to == issuer) {
      const result = await api.transact({
        actions: [{
          account: 'eosio.token',
          name: 'issue',
          authorization: [{
            actor: to,
            permission: 'active',
          }],
          data: {
            to: to,
            quantity: quantity,
            memo: memo
          }
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30,
      });
      return result;
    }
    return await token_trans(issuer, to, quantity, memo);
  } catch (e) {
    console.log("token_issue: " + e);
  }
}

export async function token_trans(from, to, quantity, memo = '') {
  try {
    await api.transact({
      actions: [{
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: 'eosio',
          permission: 'active',
        }],
        data: {
          from: from,
          to: to,
          quantity: quantity,
          memo: memo
        }
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
  } catch (e) {
    console.log("token_trans: " + e);
  }
}

// export get_contract_by_token(currency) {
//   let ctract = EOS
// }
// node only; native TextEncoder/Decoder
export async function get_info() {
  let res = await rpc.get_info();
  console.log("get_info: " + res);
}

// export async function print_time() {}
// export async function create_accounts() {}

export async function create_account(account_name) {
  try {
    await api.transact(
      {
        actions: [
          {
            account: "eosio",
            name: "newaccount",
            authorization: [
              {
                actor: "eosio",
                permission: "active",
              },
            ],
            data: {
              creator: "eosio",
              name: account_name,
              owner: {
                threshold: 1,
                keys: [
                  {
                    key: "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
                    weight: 1,
                  },
                ],
                accounts: [],
                waits: [],
              },
              active: {
                threshold: 1,
                keys: [
                  {
                    key: "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
                    weight: 1,
                  },
                ],
                accounts: [],
                waits: [],
              },
            },
          },
        ],
      },
      {
        blocksBehind: 3,
        expireSeconds: 30,
      }
    );
    console.log("create_account: " + account_name);
  } catch (e) {
    console.log("create_account: " + e.json.error.what);
  }
}

export async function create_accounts(names) {
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    await create_account(element);
  }
}

export async function create_accounts_and_wasmabi_set(names) {
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    await create_account(element);
    await wasmabi_set(
      `../system_contracts/${element}/${element}.wasm`,
      `../system_contracts/${element}/${element}.abi`,
      element)
  }
}

// export async function push_console(code,action_name,actor,data,file_name,line) {
//   tran = await rpc.push_transaction(code,acttype, actor, data);
// }

export async function wasmabi_set(wasm_path, abi_path, contract_name) {
  const wasmFilePath = wasm_path;
  const abiFilePath = abi_path;

  const wasmHexString = fs.readFileSync(wasmFilePath).toString("hex");

  const buffer = new Serialize.SerialBuffer({
    textEncoder: api.textEncoder,
    textDecoder: api.textDecoder,
  });

  let abiJSON = JSON.parse(fs.readFileSync(abiFilePath, "utf8"));
  const abiDefinitions = api.abiTypes.get("abi_def");
  abiJSON = abiDefinitions.fields.reduce(
    (acc, { name: fieldName }) =>
      Object.assign(acc, { [fieldName]: acc[fieldName] || [] }),
    abiJSON
  );
  abiDefinitions.serialize(buffer, abiJSON);
  let serializedAbiHexString = Buffer.from(buffer.asUint8Array()).toString("hex");

  await api.transact(
    {
      actions: [
        {
          account: "eosio",
          name: "setcode",
          authorization: [
            {
              actor: contract_name,
              permission: "active",
            },
          ],
          data: {
            account: contract_name,
            vmtype: '0',
            vmversion: '0',
            code: wasmHexString,
          },
        },
        {
          account: "eosio",
          name: "setabi",
          authorization: [
            {
              actor: contract_name,
              permission: "active",
            },
          ],
          data: {
            account: contract_name,
            abi: serializedAbiHexString,
          },
        },
      ],
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    }
  );
}

export async function addasset_action(asset_contract, asset_symbol) {
  await api.transact({
    actions: [{
      account: CMKRYVESTING,
      name: 'addasset',
      authorization: [{
        actor: CMKRYVESTING,
        permission: 'active',
      }],
      data: {
        asset_contract: asset_contract,
        asset_symbol: asset_symbol,
      }
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
}

export async function contract_set() {
  // let accounts = ['eosio.bpay', 'eosio.msig', 'eosio.names', 'eosio.ram', 'eosio.ramfee',
  //   'eosio.saving', 'eosio.stake', 'eosio.token', 'eosio.vpay', 'eosio.rex'];
  // let accounts_2 = ['manager', EOSDTORCLIZE, EOSDTCNTRACT, ORACLERATES,
  //   'oraclizeconn', 'provableconn', EOSDTLIQDATR,
  //   EOSDTNUTOKEN, EOSDTSTTOKEN, EOSDTGOVERNC, EOSDTBPPROXY, EOSDTEXCHANG, TOKENSWAP_EQ, EOSIO_EVM,
  //   EOSDTSAVINGS, TETHERTETHER, EOS2DTDOTCOM, EOSLOTTERYEQ, CMKRYVESTING, EOSDTKGTOKEN, DAPPSERVICES];
  let system_contracts = ['eosio.token', 'eosio.wrap', 'eosio.msig', 'eosio.bios'];

  try {
    // await create_accounts(accounts);
    // await create_accounts(accounts_2);
    await create_accounts(['cmkryvesting']);
    await create_accounts_and_wasmabi_set(system_contracts);
    // await wasmabi_set(
    //   '../system_contracts/eosio.token/eosio.token.wasm',
    //   '../system_contracts/eosio.token/eosio.token.abi',
    //   'eosio.token'
    // );
    // await wasmabi_set(
    //   '../system_contracts/eosio.wrap/eosio.wrap.wasm',
    //   '../system_contracts/eosio.wrap/eosio.wrap.abi',
    //   'eosio.wrap'
    // );
    // await wasmabi_set(
    //   '../system_contracts/eosio.msig/eosio.msig.wasm',
    //   '../system_contracts/eosio.msig/eosio.msig.abi',
    //   'eosio.msig'
    // );
    // await wasmabi_set(
    //   '../system_contracts/eosio.bios/eosio.bios.wasm',
    //   '../system_contracts/eosio.bios/eosio.bios.abi',
    //   'eosio.bios'
    // );
    // await wasmabi_set(
    //   '../system_contracts/eosio.wrap/eosio.wrap.wasm',
    //   '../system_contracts/eosio.wrap/eosio.wrap.abi',
    //   'eosio.wrap'
    // );
    await wasmabi_set(
      '../cmkryvesting/cmkryvesting.wasm',
      '../cmkryvesting/cmkryvesting.abi',
      'cmkryvesting'
    );
    console.log("contract_set: Done!");
  } catch (error) {
    console.log("contract_set: " + error);
  }
}

export async function with_drow_action(user, quantity) {
  await api.transact({
    actions: [{
      account: CMKRYVESTING,
      name: 'transfer',
      authorization: [{
        actor: CMKRYVESTING,
        permission: 'active',
      }],
      data: {
        to: user,
        quantity: quantity,
      }
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
}

export async function addvesting_action(account_id, vesting_period, vesting_amount, cliff_date, cliff_weight, start_date, end_date) {
  await api.transact({
    actions: [{
      account: CMKRYVESTING,
      name: 'addvesting',
      authorization: [{
        actor: CMKRYVESTING,
        permission: 'active',
      }],
      data: {
        account_id: account_id,
        vesting_period: vesting_period,
        vesting_amount: vesting_amount,
        cliff_date: cliff_date,
        cliff_weight: cliff_weight,
        start_date: start_date,
        end_date: end_date,
      }
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
}

export async function base_test() {
  const accounts = ['user', 'usermonthly', 'userweekly', 'userdaily', 'usersecondly', 'userlocked'];
  await contract_set();
  await create_accounts(accounts);
  await token_issue('user', '1000 EOS');
  await token_trans('eosio', 'user', '1000 EOS');
  // await with_drow_action('user', '1000 EOS');
  // await addvesting_action('usermonthly', 1, '100 EOS', '2021-02-01T00:00:00', 0.5, '2020-02-01T00:00:00', '2022-02-01T00:00:00');
}