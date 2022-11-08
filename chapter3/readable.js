"use strict";
class Readable {
    constructor(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    err() {
        this.name = "not ok";
    }
}
