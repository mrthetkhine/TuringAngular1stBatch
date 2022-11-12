type T0 = Extract<"a" | "b" | "c", "a" | "f">;
const t0:T0 = "a";

console.log("Extract ",t0);

type NonNull = NonNullable<string | number | undefined>;
let data:NonNull = "undefined";
data = "null";