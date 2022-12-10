const R = require('ramda');
const fs = require('fs');
const funfix = require('funfix');
const IO = funfix.IO;

const argsIO = IO.of(() => R.tail(R.tail(process.argv))[0]);
const readFile = (filename: string) => IO.of(() => fs.readFileSync(filename, "utf8"));
const stdoutWrite = (data: string) => IO.of(() => process.stdout.write(data));
const loudCat = argsIO.chain(readFile)
    .map(R.toUpper)
    .chain(stdoutWrite);
try {
    loudCat.run();
} catch (e) {
    console.log(e);
}