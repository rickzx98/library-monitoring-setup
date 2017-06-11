'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fluidChains = require('fluid-chains');

var _modules = require('./modules/');

var _gdsConfig = require('gds-config');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
(0, _fluidChains.ChainStrictModeEnabled)();
(0, _fluidChains.ChainCacheEnabled)();
new _gdsConfig.GDSDatabase().connect(function (errDB) {
    if (errDB) {
        console.error(errDB);
    } else {
        new _gdsConfig.GDSServer(app);
        new _modules.ResourceConfig(app);
        new _modules.Composer(app);
    }
});

exports.default = app;