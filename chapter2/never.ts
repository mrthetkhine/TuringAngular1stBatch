function alwaysThrows():never {
    throw new Error("this will always throw");
    //return -1;
}
//alwaysThrows();
enum AnEnum {
    FIRST,
    SECOND 
};
function getEnumValue(enumValue: AnEnum): string {
    switch (enumValue) {
        case AnEnum.FIRST: return "First Case";
        case AnEnum.SECOND: return "Second Case";
    }
    let returnValue: never = enumValue;
    return returnValue;
}
console.log("getEnum ",getEnumValue(AnEnum.SECOND));