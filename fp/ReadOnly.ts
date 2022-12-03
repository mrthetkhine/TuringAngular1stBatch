class Person {
    public readonly name: string;
    public readonly age: number;
    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person("Remo", 29);
//person.age = 30; // Error
//person.name = "Remo Jansen"; // Error
