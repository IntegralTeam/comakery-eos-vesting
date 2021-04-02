const { Api, JsonRpc } = require("eosjs");
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig"); // development only
const fetch = require("node-fetch"); //node only
const { TextDecoder, TextEncoder, isString } = require("util"); //node only
const privateKey1 = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";
const privateKeys = [privateKey1];

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
const NUT_SYMBOL_STR  = 'NUT';
const DAPP_SYMBOL_STR = 'DAPP';
const KG_SYMBOL_STR = 'KGRAM';
const USDT_SYMBOL_STR = 'USDT';
const ORE_SYMBOL_STR = 'ORE';


// node only; native TextEncoder/Decoder
export async function get_info() {
  let res = await rpc.get_info();
  console.log(res);
}

export async function print_time() {
  let res = await rpc.get_info().head_block_time;
  console.log(res);
  rpc.push_transaction();
}

// export async function create_accounts() {
//     api.
// }

export async function create_accaunt(account_name) {
  let res = await api.transact(
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

  console.log(res);
}

export async function create_accounts(names) {
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    await create_accaunt(element);
  }
}

// export async function push_console(code,action_name,actor,data,file_name,line) {
//     tran = await rpc.push_transaction(code,acttype, actor, data);

// }

export async function wasmabi_set(wasm_path,abi_path) {
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
  serializedAbiHexString = Buffer.from(buffer.asUint8Array()).toString("hex");

  await api.transact(
    {
      actions: [
        {
          account: "eosio",
          name: "setcode",
          authorization: [
            {
              actor: "eosio",
              permission: "active",
            },
          ],
          data: {
            account: "eosio",
            code: wasmHexString,
          },
        },
        {
          account: "eosio",
          name: "setabi",
          authorization: [
            {
              actor: "eosio",
              permission: "active",
            },
          ],
          data: {
            account: "eosio",
            abi: serializedAbiHexString,
          },
        },
      ],
    },
    {
      blocksBehind: 3,
      expireSeconds: 30,
    }
  );
}

export async function contract_set() {
    let accounts = ['eosio.bpay','eosio.msig','eosio.names','eosio.ram','eosio.ramfee',
                    'eosio.saving','eosio.stake','eosio.token','eosio.vpay','eosio.rex'];
    
    try {
        await create_accounts(accounts);
        wasmabi_set(
            '../system_contracts/eosio.token/eosio.token.wasm',
            '../system_contracts/eosio.token/eosio.token.abi'
        );
        wasmabi_set(
            '../system_contracts/eosio.wrap/eosio.wrap.wasm',
            '../system_contracts/eosio.wrap/eosio.wrap.abi'
        );
        wasmabi_set(
            '../system_contracts/eosio.msig/eosio.msig.wasm',
            '../system_contracts/eosio.msig/eosio.msig.abi'
        );
        wasmabi_set(
            '../system_contracts/eosio.bios/eosio.bios.wasm',
            '../system_contracts/eosio.bios/eosio.bios.abi'
        );
        wasmabi_set(
            '../system_contracts/eosio.wrap/eosio.wrap.wasm',
            'system_contracts/eosio.wrap/eosio.wrap.abi'
        )
    } catch (error) {
        console.log(error);
    }
}