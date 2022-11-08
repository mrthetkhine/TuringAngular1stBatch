console.log("Max ",Math.max(1,12,2));
let arr = [10,20,30,-12];
console.log("Math ",Math.max.apply(null,arr));


function mixin(source, target) {
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
}
let s = {
    hello : function()
    {
        console.log("Hello");
    }
};
let target = {};
mixin(s,target);
target.hello();