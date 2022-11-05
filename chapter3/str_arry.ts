interface StringArray {
  [index: number]: string|number;
}
 
const myArray: StringArray = ["One","Two",3];
const nonNum = "1";
const secondItem = myArray[nonNum];
console.log("Second item ",secondItem)