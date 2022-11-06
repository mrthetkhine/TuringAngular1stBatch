class A {
  private x = 10;
  #amount = 200;
 
  public sameAs(other: A) {
    // No error
    return other.x === this.x;
  }
}

let a:A = new A();
console.log(`A.x `, a['x']);
//console.log(`A.amount `, a['amount']);