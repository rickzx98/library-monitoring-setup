'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _authenticationModule = require('authentication-module');

var _schoolModule = require('school-module');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PORT = process.env.PORT || 5000;

var ResourceConfig = function ResourceConfig(app) {
    _classCallCheck(this, ResourceConfig);

    app.listen(PORT, function () {
        console.log('listening to port', PORT);
        new _authenticationModule.AuthenticationResource(app);
        new _schoolModule.SchoolResource(app);
    });
};

exports.default = ResourceConfig;