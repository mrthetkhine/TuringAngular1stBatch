type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
 
interface Email {
  message: string;
}
 
interface Dog {
  bark(): void;
}
type Human  = {
    name : string,
    age : number
}
interface Another
{
    message: {name:'Tk'};
}
 
type EmailMessageContents = MessageOf<Email>;
type DogMessage = MessageOf<Dog>;
type HumanMessage = MessageOf<Another>;

type Flatten<T> = T extends any[] ? T[number] : T;
type Str = Flatten<(string|number)[]>;
type Something = Flatten<number>;