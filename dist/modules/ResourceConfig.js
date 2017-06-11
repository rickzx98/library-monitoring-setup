'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _authenticationModule = require('authentication-module');

var _schoolModule = require('school-module');

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PORT = process.env.PORT || 9080;

var ResourceConfig = function ResourceConfig(app) {
    _classCallCheck(this, ResourceConfig);

    var server = _http2.default.createServer(app);
    var sockets = (0, _socket2.default)(server);
    server.listen(PORT);
    new _authenticationModule.AuthenticationResource(app);
    new _schoolModule.SchoolResource(app);
    console.log('listening to port', PORT);
};

exports.default = ResourceConfig;