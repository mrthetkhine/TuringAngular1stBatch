class NoImplicitThisClass {
    id: number = 1;
    printAfterWait() {
        let callback = function (that:NoImplicitThisClass) {
            console.log(`this.id : ${that.id}`);
        }
        setTimeout(callback, 1000,this);
    }
}