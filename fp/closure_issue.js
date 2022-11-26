function makeArmy() {
       const shooters = [];
       
       for (let i = 0; i < 10; i++) {
           const shooter = () => { // a shooter is a function
               console.log(i); // which should display it's number
            };   
           shooters.push(shooter);
       }
    return shooters;
}
let arr = makeArmy();
arr[0]();
arr[8]();