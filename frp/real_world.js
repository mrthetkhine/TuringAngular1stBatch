var R = require('ramda');
var fs = require('fs');
var funfix = require('funfix');
var IO = funfix.IO;
var argsIO = IO.of(function () { return R.tail(R.tail(process.argv))[0]; });
var readFile = function (filename) { return IO.of(function () { return fs.readFileSync(filename, "utf8"); }); };
var stdoutWrite = function (data) { return IO.of(function () { return process.stdout.write(data); }); };
var loudCat = argsIO.chain(readFile)
    .map(R.toUpper)
    .chain(stdoutWrite);
try {
    loudCat.run();
}
catch (e) {
    console.log(e);
}
