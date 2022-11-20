enum SwitchEnum {
    ONE,
    TWO 
}
function testEnumSwitch(value: SwitchEnum): string {
    let returnValue = "";
    switch (value) {
        case SwitchEnum.ONE:
            returnValue = "One";
        break;
        case SwitchEnum.TWO:
            returnValue = "Two";
        
    }
    return returnValue;
}