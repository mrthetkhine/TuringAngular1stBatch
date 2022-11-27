let getPrice = function
    | "banana" -> 0.79
    | "watermelon" -> 3.49
    | "tofu" -> 1.09
    | _ -> nan

printfn "Banana price is %A " (getPrice "yuw")

let rec fib n =
    match n with
    | 0 -> 0
    | 1 -> 1
    | _ -> fib (n - 1) + fib (n - 2)

let rec factorial n =
    match n with
    | 0 -> 1
    | 1 -> 1
    | _ -> n* factorial(n - 1)
printfn "Fac  %A " (factorial 3)