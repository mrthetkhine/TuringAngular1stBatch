+function()
{
    console.log('Hello');
}();

var Counter = (function()
{
    var count = 0 ;
    function getCount()
    {
        return count;
    }
    function incCount()
    {
        count ++;
    }
    return {
        getCount,
        incCount,
    }
});
let c = Counter();
c.count = 20;
console.log('C ',c.getCount());
c.incCount();
console.log('C ',c.getCount());