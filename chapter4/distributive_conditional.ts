type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;

let k : StrArrOrNumArr = ["One","Two","Three"];
k = [1,3,3,4];

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
 
// 'StrArrOrNumArr' is no longer a union.
type NonDistrStrOrNumArr = ToArrayNonDist<string | number>;

let data :NonDistrStrOrNumArr = ["one",1,"two"];