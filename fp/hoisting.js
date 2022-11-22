function foo() {
    console.log('Bar ',bar);
    if (true) {
        var bar = 10;
        let something = 20;
    }
    console.log(bar);
    //console.log('Something ',something);
}
foo(); 