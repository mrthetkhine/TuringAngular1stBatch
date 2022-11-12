interface Props {
  a?: number;
  b?: string;
}
const obj2: Required<Props> = { a: 5, b :"Hello" };
console.log("Required ",obj2)