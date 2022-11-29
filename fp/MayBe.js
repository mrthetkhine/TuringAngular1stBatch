var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
    return MayBe;
}());
var appendHi = function (s) { return s + " hi"; }; //[String->String]
var capitalize = function (s) { return s.toUpperCase(); }; //[String->String]
var compose = function (f, g) { return function (x) { return f(g(x)); }; };
var data = undefined;
var result = MayBe.of(data)
    .map(appendHi)
    .map(capitalize);
console.log('Result ', result);
function fetchNews() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var url = "https://www.reddit.com/r/typescript/new.json";
                    fetch(url)
                        .then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        resolve(new MayBe(json));
                    })["catch"](function () {
                        resolve(new MayBe());
                    });
                })];
        });
    });
}
(function () { return __awaiter(_this, void 0, void 0, function () {
    var maybeOfResponse, maybeOfNews;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchNews()];
            case 1:
                maybeOfResponse = _a.sent();
                maybeOfNews = maybeOfResponse
                    .map(function (r) { return r.data; })
                    .map(function (d) { return d.children; })
                    .map(function (children) { return children.map(function (c) { return c.data; }); });
                maybeOfNews.map(function (news) {
                    news.forEach(function (n) { return console.log("".concat(n.title, " - ").concat(n.url)); });
                    return news;
                });
                return [2 /*return*/];
        }
    });
}); })();
