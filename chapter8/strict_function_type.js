"use strict";
let numberOrString;
//let numberOnly: number = numberOrString;
function withCallback(fn) {
    fn("test");
}
function withNumberOnly(a) {
    console.log(`a : ${a}`);
}
//withCallback(withNumberOnly);    
class WithPrint {
    print() { }
}
class WithPrintAndRun extends WithPrint {
    run() { }
}
function usePrint(fn) {
    let withPrint = new WithPrint();
    fn(withPrint);
}
/*
usePrint((withRun: WithPrintAndRun) => {
    withRun.run();
});
*/
