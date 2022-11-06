var Counter = /** @class */ (function () {
    function Counter() {
        this.x = 10;
        Counter.noOfInsatance++;
    }
    Counter.prototype.inc = function () {
        this.x++;
    };
    Counter.noOfInsatance = 0;
    return Counter;
}());
var c1 = new Counter();
var c2 = new Counter();
c1.inc();
console.log("C1 ", c1.x);
c2.inc();
console.log("C1 ", c2.x);
console.log("Counter ", Counter.noOfInsatance);
