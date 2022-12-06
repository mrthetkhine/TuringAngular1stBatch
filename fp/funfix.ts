import * as R from "ramda";
import * as fs from "fs";
import { IO } from "funfix";
const argsIO = IO.of(() => R.tail(R.tail(process.argv))[0]);
const readFile = (filename) => IO.of(() => fs.readFileSync(filename, "utf8"));
const stdoutWrite = (data) => IO.of(() => process.stdout.write(data));
const loudCat = argsIO.chain(readFile)
   .map(R.toUpper)
   .chain(stdoutWrite);
try {
   loudCat.run();
} catch (e) {
   console.log(e);
}