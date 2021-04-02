"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var test_api = require('./common');

function run() {
  return _run.apply(this, arguments);
}

function _run() {
  _run = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var nemaes;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //await a.create_accaunt('t2');
            nemaes = ['t3', 't4', 't5'];
            _context.next = 3;
            return test_api.create_accounts(nemaes);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _run.apply(this, arguments);
}

run();