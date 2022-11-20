"use strict";
var SwitchEnum;
(function (SwitchEnum) {
    SwitchEnum[SwitchEnum["ONE"] = 0] = "ONE";
    SwitchEnum[SwitchEnum["TWO"] = 1] = "TWO";
})(SwitchEnum || (SwitchEnum = {}));
function testEnumSwitch(value) {
    let returnValue = "";
    switch (value) {
        case SwitchEnum.ONE:
            returnValue = "One";
            break;
        /*case SwitchEnum.TWO:
            returnValue = "Two";
            */
    }
    return returnValue;
}
