import { bindNodeCallback } from "rxjs";
import * as fs from "fs";
const observableFactory = bindNodeCallback(fs.readFile);
const observable = observableFactory("./package.json");
const subscription = observable.subscribe(
    (value) => console.log(value.toString())
);
//subscription.unsubscribe();