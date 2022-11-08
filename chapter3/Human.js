"use strict";
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("Human Constructor");
    }
    work() {
        console.log("Human ", this.name, " Work this->", this);
    }
}
class Doctor extends Human {
    constructor(name, age, speciality) {
        super(name, age);
        this.speciality = speciality;
        console.log("Doctor Constructor");
    }
    work() {
        console.log("Doctor work ");
        super.work();
    }
}
let h = new Doctor('TK', 38, "General Health");
console.log("H is ", h);
h.work();
