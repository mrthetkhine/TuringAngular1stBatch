"use strict";
exports.__esModule = true;
exports.Address = exports.Street = void 0;
var R = require("ramda");
var Street = /** @class */ (function () {
    function Street(num, name) {
        this.num = num;
        this.name = name;
    }
    Street.prototype.toString = function () {
        return "No ".concat(this.num, " , Street ").concat(this.name);
    };
    return Street;
}());
exports.Street = Street;
var Address = /** @class */ (function () {
    function Address(city, street) {
        this.city = city;
        this.street = street;
    }
    return Address;
}());
exports.Address = Address;
var Company = /** @class */ (function () {
    function Company(name, addresses) {
        this.name = name;
        this.addresses = addresses;
    }
    return Company;
}());
var company1 = new Company("Facebook", [
    new Address("London", new Street(1, "rathbone square")),
    new Address("Dublin", new Street(5, "grand canal square"))
]);
//company1.addresses = company1.addresses.map(a => R.toUpper(a.street.name));
//company.adress.street.name =
var company2 = new Company(company1.name, company1.addresses.map(function (a) {
    return new Address(a.city, new Street(a.street.num, R.toUpper(a.street.name)));
}));
console.log("Company2 ", company2.addresses[0].street.name);
