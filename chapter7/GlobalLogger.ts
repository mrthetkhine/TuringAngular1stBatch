declare const CONTACT_EMAIL_ARRAY: string[]
//declare window;
class GlobalLogger {
    public static logGlobalsToConsole() {
        for (let email of CONTACT_EMAIL_ARRAY) 
        {
            console.log(`found contact : ${email}`);
        } 
}
}
GlobalLogger.logGlobalsToConsole();
