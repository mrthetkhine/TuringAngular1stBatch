"use strict";
//declare window;
class GlobalLogger {
    static logGlobalsToConsole() {
        for (let email of CONTACT_EMAIL_ARRAY) {
            console.log(`found contact : ${email}`);
        }
    }
}
GlobalLogger.logGlobalsToConsole();
