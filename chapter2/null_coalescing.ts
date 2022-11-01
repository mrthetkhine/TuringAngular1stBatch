function nullishCheck(a: number | undefined | null) {
    console.log(`a : ${a ?? `undefined or null`}`);
}
nullishCheck(10);
nullishCheck(null);
nullishCheck(undefined);

function testNullOperands(a: number, b: number | null | undefined) {
    return a + (b??0);
}
console.log("Test ",testNullOperands(1,undefined));
console.log("Test ",testNullOperands(1,2));