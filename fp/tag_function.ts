function htmlEscape(literals: TemplateStringsArray, ...placeholders: any[]) {
    let result = "";
    console.log('Literal ',literals);
    console.log('Place holder ', placeholders);
     for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/"/g, "'")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
    result += literals[literals.length - 1];
    return result;
}
let name = 'Something';
let surname = 'U Aung';
 let html = htmlEscape `<h1>${name} & ${surname}</h1>`;
 console.log('Html ',html);
