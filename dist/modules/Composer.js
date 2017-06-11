'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _authenticationModule = require('authentication-module');

var _fluidChains = require('fluid-chains');

var _gdsConfig = require('gds-config');

var _schoolModule = require('school-module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var protocol = function protocol(req) {
    return req.connection.encrypted ? 'https://' : 'http://';
};
new _schoolModule.SchoolResourceChain();
new _authenticationModule.AuthenticationResourceChain();

var Composer = function Composer(app) {
    _classCallCheck(this, Composer);

    app.get('/api', function (req, res) {
        (0, _fluidChains.ExecuteChain)(['AuthenticationResourceChain', 'SchoolResourceChain'], {
            host: req.headers.host,
            protocol: protocol(req)
        }, function (result) {
            if (result.$err) {
                console.log(result.$err());
            }
            res.status(200).send(result.domain());
        });
    });

    app.get('/api/:resource', function (req, res) {
        (0, _fluidChains.ExecuteChain)(req.params.resource + 'Chain', {
            host: req.headers.host,
            protocol: protocol(req)
        }, function (result) {
            var domain = result.domain();
            res.status(200).send(domain);
        });
    });
};

exports.default = Composer;