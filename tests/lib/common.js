"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_info = get_info;
exports.print_time = print_time;
exports.create_accaunt = create_accaunt;
exports.create_accounts = create_accounts;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _require = require('eosjs'),
    Api = _require.Api,
    JsonRpc = _require.JsonRpc;

var _require2 = require('eosjs/dist/eosjs-jssig'),
    JsSignatureProvider = _require2.JsSignatureProvider; // development only


var fetch = require('node-fetch'); //node only


var _require3 = require('util'),
    TextDecoder = _require3.TextDecoder,
    TextEncoder = _require3.TextEncoder,
    isString = _require3.isString; //node only


var privateKey1 = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3';
var privateKeys = [privateKey1];
var signatureProvider = new JsSignatureProvider(privateKeys);
var rpc = new JsonRpc('http://127.0.0.1:8888', {
  fetch: fetch
}); //required to read blockchain state

var api = new Api({
  rpc: rpc,
  signatureProvider: signatureProvider,
  textDecoder: new TextDecoder(),
  textEncoder: new TextEncoder()
}); //required to submit transactions
// node only; native TextEncoder/Decoder

function get_info() {
  return _get_info.apply(this, arguments);
}

function _get_info() {
  _get_info = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return rpc.get_info();

          case 2:
            res = _context.sent;
            console.log(res);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get_info.apply(this, arguments);
}

function print_time() {
  return _print_time.apply(this, arguments);
} // export async function create_accounts() {
//     api.
// }


function _print_time() {
  _print_time = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var res;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return rpc.get_info().head_block_time;

          case 2:
            res = _context2.sent;
            console.log(res);
            rpc.push_transaction();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _print_time.apply(this, arguments);
}

function create_accaunt(_x) {
  return _create_accaunt.apply(this, arguments);
}

function _create_accaunt() {
  _create_accaunt = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(account_name) {
    var res;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return api.transact({
              actions: [{
                account: 'eosio',
                name: 'newaccount',
                authorization: [{
                  actor: 'eosio',
                  permission: 'active'
                }],
                data: {
                  creator: 'eosio',
                  name: account_name,
                  owner: {
                    threshold: 1,
                    keys: [{
                      key: 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV',
                      weight: 1
                    }],
                    accounts: [],
                    waits: []
                  },
                  active: {
                    threshold: 1,
                    keys: [{
                      key: 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV',
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
            res = _context3.sent;
            console.log(res);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _create_accaunt.apply(this, arguments);
}

function create_accounts(_x2) {
  return _create_accounts.apply(this, arguments);
}

function _create_accounts() {
  _create_accounts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(names) {
    var index, element;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            index = 0;

          case 1:
            if (!(index < names.length)) {
              _context4.next = 8;
              break;
            }

            element = names[index];
            _context4.next = 5;
            return create_accaunt(element);

          case 5:
            index++;
            _context4.next = 1;
            break;

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _create_accounts.apply(this, arguments);
}