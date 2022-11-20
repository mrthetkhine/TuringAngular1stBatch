class WithoutInit {
    a: number = 0;
    b!: string ; 
}
let k = new WithoutInit();
console.log("K ",k.b);