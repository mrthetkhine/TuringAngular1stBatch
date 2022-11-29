var Nothing = /** @class */ (function () {
    function Nothing(val) {
        this._value = val;
    }
    Nothing.of = function (val) {
        return new Nothing(val);
    };
    Nothing.prototype.map = function (fn) {
        return new Nothing(this._value);
    };
    return Nothing;
}());
var MayBe = /** @class */ (function () {
    function MayBe(val) {
        if (val) {
            this._value = val;
        }
    }
    MayBe.of = function (val) {
        return new MayBe(val);
    };
    MayBe.prototype.isNothing = function () {
        return (this._value === null || this._value === undefined);
    };
    MayBe.prototype.map = function (fn) {
        if (this.isNothing()) {
            return new MayBe();
        }
        else {
            return new MayBe(fn(this._value));
        }
    };
    MayBe.prototype.ap = function (c) {
        var _this = this;
        return c.map(function (fn) { return _this.map(fn); });
    };
    MayBe.prototype.join = function () {
        return this.isNothing() ? Nothing.of(this._value) : this._value;
    };
    MayBe.prototype.chain = function (fn) {
        return this.map(fn).join();
    };
    MayBe.prototype.orElse = function (v) {
        if (this.isNothing()) {
            return v;
        }
        else {
            return this._value;
        }
    };
    return MayBe;
}());
//map
// single -> single
//a->b
/**
 *
 * // chain -
// a->M[b] => [a]=>[b]
 *
 */
//normal function
var addOne = function (x) { return x + 1; };
var monadicAddOne = function (x) { return MayBe.of(x + 1); };
var double = function (x) { return x * 2; };
var result = MayBe.of(3)
    .map(monadicAddOne) //MayBe(MayBe(4))
    //.join();
    .chain(double);
console.log("Result ", result);
