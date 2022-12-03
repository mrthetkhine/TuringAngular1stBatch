"use strict";
exports.__esModule = true;
var WhyOptics_1 = require("WhyOptics");
var streetLens = {
    get: function (o) { return o.street; },
    set: function (v, o) { return new WhyOptics_1.Address(o.city, v); }
};
