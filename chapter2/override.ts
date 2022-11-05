function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
    return a + b; 
}
console.log(add("first", "second"));
console.log(add(1, 2));