"use strict";
class Box {
    constructor() {
        this.content = "";
    }
    sameAs(other) {
        return other.content === this.content;
    }
}
class DerivedBox extends Box {
    constructor() {
        super(...arguments);
        this.otherContent = "?";
    }
}
const base = new DerivedBox();
const derived = new Box();
derived.sameAs(base);
