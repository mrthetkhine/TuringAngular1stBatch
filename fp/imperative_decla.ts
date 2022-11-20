let objArr =[
    {
        name : "Mg Mg",
        gender : 'Male'
    },
    {
        name : "Hla Hla",
        gender : 'Female'
    },
    {
        name : "Mg Hla",
        gender : 'Male'
    },
    {
        name : "Mya Mya",
        gender : 'Female'
    },
];

let maleList:Array<any> =[];
for(let obj of objArr)
{
    if(obj.gender == 'Male')
    {
        maleList.push(obj);
    }
}
console.log('Malelist ',maleList);

const isMale = (obj:any)=> obj.gender == 'Male';
maleList = objArr.filter(isMale);
console.log('Malelist ',maleList);