type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
type Str = Flatten<(string|number)[]>;
type Something = Flatten<number>;

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
 
type Num = GetReturnType<() => number>;