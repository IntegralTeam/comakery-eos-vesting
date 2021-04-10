"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addasset = addasset;
exports.token_issue = token_issue;
exports.token_trans = token_trans;
exports.get_info = get_info;
exports.print_time = print_time;
exports.create_accaunt = create_accaunt;
exports.create_accounts = create_accounts;
exports.wasmabi_set = wasmabi_set;
exports.addasset_action = addasset_action;
exports.contract_set = contract_set;
exports.with_drow_action = with_drow_action;
exports.addvesting_action = addvesting_action;
exports.base_test = base_test;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require("eosjs"),
    Api = _require.Api,
    JsonRpc = _require.JsonRpc;

var _require2 = require("eosjs"),
    Serialize = _require2.Serialize;

var _require3 = require("eosjs/dist/eosjs-jssig"),
    JsSignatureProvider = _require3.JsSignatureProvider; // development only


var fetch = require("node-fetch"); //node only


var _require4 = require("util"),
    TextDecoder = _require4.TextDecoder,
    TextEncoder = _require4.TextEncoder,
    isString = _require4.isString; //node only


var privateKey1 = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";
var privateKeys = [privateKey1];
var signatureProvider = new JsSignatureProvider(privateKeys);
var rpc = new JsonRpc("http://127.0.0.1:8888", {
  fetch: fetch
}); //required to read blockchain state

var fs = require('fs');

var api = new Api({
  rpc: rpc,
  signatureProvider: signatureProvider,
  textDecoder: new TextDecoder(),
  textEncoder: new TextEncoder()
}); //required to submit transactions

var EOS_SYMBOL_STR = 'EOS';
var REX_SYMBOL_STR = 'REX';
var USD_SYMBOL_STR = 'USD';
var CNY_SYMBOL_STR = 'CNU';
var STABLE_SYMBOL_STR = 'EOSDT';
var EOSDT_SYMBOL_STR = 'EOSDT';
var NUT_SYMBOL_STR = 'NUT';
var DAPP_SYMBOL_STR = 'DAPP';
var KG_SYMBOL_STR = 'KGRAM';
var USDT_SYMBOL_STR = 'USDT';
var ORE_SYMBOL_STR = 'ORE';
var CMKRYVESTING = 'cmkryvesting';
var EOSDTORCLIZE = 'eosdtorclize';
var EOSDTCNTRACT = 'eosdtcntract';
var ORACLERATES = 'orarates';
var EOSDTLIQDATR = 'eosdtliqdatr';
var EOSDTNUTOKEN = 'eosdtnutoken';
var EOSDTSTTOKEN = 'eosdtsttoken';
var EOSDTGOVERNC = 'eosdtgovernc';
var EOSDTBPPROXY = 'eosdtbpproxy';
var EOSDTEXCHANG = 'eosdtexchang';
var TOKENSWAP_EQ = 'tokenswap.eq';
var EOSIO_EVM = 'eosio.evm';
var EOSDTSAVINGS = 'eosdtsavings';
var TETHERTETHER = 'tethertether';
var EOS2DTDOTCOM = 'eos2dtdotcom';
var EOSLOTTERYEQ = 'eoslotteryeq';
var EOSDTKGTOKEN = 'eosdtkgtoken';
var DAPPSERVICES = 'dappservices';
var ACTION_ADDASSET = 'addasset';

function addasset(_x, _x2) {
  return _addasset.apply(this, arguments);
}

function _addasset() {
  _addasset = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(asset_contract, asset_symbol) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return api.transact({
              actions: [{
                account: 'eosio',
                name: 'addasset',
                authorization: [{
                  actor: 'eosio',
                  permission: 'active'
                }],
                data: {
                  asset_contract: asset_contract,
                  asset_symbol: asset_symbol
                }
              }]
            }, {
              blocksBehind: 3,
              expireSeconds: 30
            });

          case 2:
            result = _context.sent;
            console.dir(result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addasset.apply(this, arguments);
}

function token_issue(_x3, _x4) {
  return _token_issue.apply(this, arguments);
}

function _token_issue() {
  _token_issue = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(to, quantity) {
    var memo,
        issuer,
        result,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            memo = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : ' ';
            issuer = 'eosio';

            if (!(to == issuer)) {
              _context2.next = 7;
              break;
            }

            _context2.next = 5;
            return api.transact({
              actions: [{
                account: 'eosio.token',
                name: 'issue',
                authorization: [{
                  actor: to,
                  permission: 'active'
                }],
                data: {
                  to: to,
                  quantity: quantity,
                  memo: memo
                }
              }]
            }, {
              blocksBehind: 3,
              expireSeconds: 30
            });

          case 5:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 7:
            _context2.next = 9;
            return token_trans(issuer, to, quantity);

          case 9:
            return _context2.abrupt("return", _context2.sent);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _token_issue.apply(this, arguments);
}

function token_trans(_x5, _x6, _x7, _x8) {
  return _token_trans.apply(this, arguments);
} // export get_contract_by_token(currency) {
//   let ctract = EOS
// }
// node only; native TextEncoder/Decoder


function _token_trans() {
  _token_trans = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(from, to, quantity, memo) {
    var resault;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return api.transact({
              actions: [{
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: 'eosio',
                  permission: 'active'
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
              expireSeconds: 30
            });

          case 2:
            resault = _context3.sent;

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _token_trans.apply(this, arguments);
}

function get_info() {
  return _get_info.apply(this, arguments);
}

function _get_info() {
  _get_info = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var res;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return rpc.get_info();

          case 2:
            res = _context4.sent;
            console.log(res);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _get_info.apply(this, arguments);
}

function print_time() {
  return _print_time.apply(this, arguments);
} // export async function create_accounts() {
//     api.
// }


function _print_time() {
  _print_time = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            transact;

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _print_time.apply(this, arguments);
}

function create_accaunt(_x9) {
  return _create_accaunt.apply(this, arguments);
}

function _create_accaunt() {
  _create_accaunt = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(account_name) {
    var res;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return api.transact({
              actions: [{
                account: "eosio",
                name: "newaccount",
                authorization: [{
                  actor: "eosio",
                  permission: "active"
                }],
                data: {
                  creator: "eosio",
                  name: account_name,
                  owner: {
                    threshold: 1,
                    keys: [{
                      key: "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
                      weight: 1
                    }],
                    accounts: [],
                    waits: []
                  },
                  active: {
                    threshold: 1,
                    keys: [{
                      key: "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
                      weight: 1
                    }],
                    accounts: [],
                    waits: []
                  }
                }
              }]
            }, {
              blocksBehind: 3,
              expireSeconds: 30
            });

          case 2:
            res = _context6.sent;
            console.log(res);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _create_accaunt.apply(this, arguments);
}

function create_accounts(_x10) {
  return _create_accounts.apply(this, arguments);
} // export async function push_console(code,action_name,actor,data,file_name,line) {
//     tran = await rpc.push_transaction(code,acttype, actor, data);
// }


function _create_accounts() {
  _create_accounts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(names) {
    var index, element;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            index = 0;

          case 1:
            if (!(index < names.length)) {
              _context7.next = 8;
              break;
            }

            element = names[index];
            _context7.next = 5;
            return create_accaunt(element);

          case 5:
            index++;
            _context7.next = 1;
            break;

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _create_accounts.apply(this, arguments);
}

function wasmabi_set(_x11, _x12, _x13) {
  return _wasmabi_set.apply(this, arguments);
}

function _wasmabi_set() {
  _wasmabi_set = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(wasm_path, abi_path, contract_name) {
    var wasmFilePath, abiFilePath, wasmHexString, buffer, abiJSON, abiDefinitions, serializedAbiHexString;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            wasmFilePath = wasm_path;
            abiFilePath = abi_path;
            wasmHexString = fs.readFileSync(wasmFilePath).toString("hex");
            buffer = new Serialize.SerialBuffer({
              textEncoder: api.textEncoder,
              textDecoder: api.textDecoder
            });
            abiJSON = JSON.parse(fs.readFileSync(abiFilePath, "utf8"));
            abiDefinitions = api.abiTypes.get("abi_def");
            abiJSON = abiDefinitions.fields.reduce(function (acc, _ref) {
              var fieldName = _ref.name;
              return Object.assign(acc, (0, _defineProperty2["default"])({}, fieldName, acc[fieldName] || []));
            }, abiJSON);
            abiDefinitions.serialize(buffer, abiJSON);
            serializedAbiHexString = Buffer.from(buffer.asUint8Array()).toString("hex");
            _context8.next = 11;
            return api.transact({
              actions: [{
                account: "eosio",
                name: "setcode",
                authorization: [{
                  actor: contract_name,
                  permission: "active"
                }],
                data: {
                  account: contract_name,
                  vmtype: '0',
                  vmversion: '0',
                  code: wasmHexString
                }
              }, {
                account: "eosio",
                name: "setabi",
                authorization: [{
                  actor: contract_name,
                  permission: "active"
                }],
                data: {
                  account: contract_name,
                  abi: serializedAbiHexString
                }
              }]
            }, {
              blocksBehind: 3,
              expireSeconds: 30
            });

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _wasmabi_set.apply(this, arguments);
}

function addasset_action(_x14, _x15) {
  return _addasset_action.apply(this, arguments);
}

function _addasset_action() {
  _addasset_action = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(asset_contract, asset_symbol) {
    var result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return api.transact({
              actions: [{
                account: CMKRYVESTING,
                name: 'addasset',
                authorization: [{
                  actor: CMKRYVESTING,
                  permission: 'active'
                }],
                data: {
                  asset_contract: asset_contract,
                  asset_symbol: asset_symbol
                }
              }]
            }, {
              blocksBehind: 3,
              expireSeconds: 30
            });

          case 2:
            result = _context9.sent;

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _addasset_action.apply(this, arguments);
}

function contract_set() {
  return _contract_set.apply(this, arguments);
}

function _contract_set() {
  _contract_set = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
    var accounts, accounts_2;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            accounts = ['eosio.bpay', 'eosio.msig', 'eosio.names', 'eosio.ram', 'eosio.ramfee', 'eosio.saving', 'eosio.stake', 'eosio.token', 'eosio.vpay', 'eosio.rex'];
            accounts_2 = ['manager', EOSDTORCLIZE, EOSDTCNTRACT, ORACLERATES, 'oraclizeconn', 'provableconn', EOSDTLIQDATR, EOSDTNUTOKEN, EOSDTSTTOKEN, EOSDTGOVERNC, EOSDTBPPROXY, EOSDTEXCHANG, TOKENSWAP_EQ, EOSIO_EVM, EOSDTSAVINGS, TETHERTETHER, EOS2DTDOTCOM, EOSLOTTERYEQ, CMKRYVESTING, EOSDTKGTOKEN, DAPPSERVICES];
            _context10.prev = 2;
            _context10.next = 5;
            return wasmabi_set('../system_contracts/eosio.token/eosio.token.wasm', '../system_contracts/eosio.token/eosio.token.abi', 'eosio.token');

          case 5:
            _context10.next = 7;
            return wasmabi_set('../system_contracts/eosio.wrap/eosio.wrap.wasm', '../system_contracts/eosio.wrap/eosio.wrap.abi', 'eosio.wrap');

          case 7:
            _context10.next = 9;
            return wasmabi_set('../system_contracts/eosio.msig/eosio.msig.wasm', '../system_contracts/eosio.msig/eosio.msig.abi', 'eosio.msig');

          case 9:
            _context10.next = 11;
            return wasmabi_set('../system_contracts/eosio.bios/eosio.bios.wasm', '../system_contracts/eosio.bios/eosio.bios.abi', 'eosio.bios');

          case 11:
            _context10.next = 13;
            return wasmabi_set('../system_contracts/eosio.wrap/eosio.wrap.wasm', '../system_contracts/eosio.wrap/eosio.wrap.abi', 'eosio.wrap');

          case 13:
            _context10.next = 15;
            return wasmabi_set('../cmkryvesting/cmkryvesting.wasm', '../cmkryvesting/cmkryvesting.abi', 'cmkryvesting');

          case 15:
            _context10.next = 20;
            break;

          case 17:
            _context10.prev = 17;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);

          case 20:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 17]]);
  }));
  return _contract_set.apply(this, arguments);
}

function with_drow_action(_x16, _x17) {
  return _with_drow_action.apply(this, arguments);
}

function _with_drow_action() {
  _with_drow_action = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(user, quantity) {
    var resault;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return api.transact({
              actions: [{
                account: CMKRYVESTING,
                name: 'transfer',
                authorization: [{
                  actor: CMKRYVESTING,
                  permission: 'active'
                }],
                data: {
                  to: user,
                  quantity: quantity
                }
              }]
            }, {
              blocksBehind: 3,
              expireSeconds: 30
            });

          case 2:
            resault = _context11.sent;

          case 3:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _with_drow_action.apply(this, arguments);
}

function addvesting_action(_x18, _x19, _x20, _x21, _x22, _x23, _x24) {
  return _addvesting_action.apply(this, arguments);
}

function _addvesting_action() {
  _addvesting_action = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(account_id, vesting_period, vesting_amount, cliff_date, cliff_weight, start_date, end_date) {
    var result;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return api.transact({
              actions: [{
                account: CMKRYVESTING,
                name: 'addvesting',
                authorization: [{
                  actor: CMKRYVESTING,
                  permission: 'active'
                }],
                data: {
                  account_id: account_id,
                  vesting_period: vesting_period,
                  vesting_amount: vesting_amount,
                  cliff_date: cliff_date,
                  cliff_weight: cliff_weight,
                  start_date: start_date,
                  end_date: end_date
                }
              }]
            }, {
              blocksBehind: 3,
              expireSeconds: 30
            });

          case 2:
            result = _context12.sent;

          case 3:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _addvesting_action.apply(this, arguments);
}

function base_test() {
  return _base_test.apply(this, arguments);
}

function _base_test() {
  _base_test = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
    var accounts;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            accounts = ['user', 'usermonthly', 'userweekly', 'userdaily', 'usersecondly', 'userlocked'];
            _context13.next = 3;
            return contract_set();

          case 3:
            _context13.next = 5;
            return create_accounts('user', 'usermonthly', 'userweekly', 'userdaily', 'usersecondly', 'userlocked');

          case 5:
            _context13.next = 7;
            return token_issue('user', '1000 EOS');

          case 7:
            _context13.next = 9;
            return token_trans('user', '1000 EOS', 'deposid');

          case 9:
            _context13.next = 11;
            return with_drow_action('user', '1000 EOS');

          case 11:
            _context13.next = 13;
            return addvesting_action('usermonthly', 1, '100 EOS', '2021-02-01T00:00:00', 0.5, '2020-02-01T00:00:00', '2022-02-01T00:00:00');

          case 13:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _base_test.apply(this, arguments);
}